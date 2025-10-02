// Import required packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Anthropic client with API key from environment variables
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request bodies

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Family Activity Finder API is running' });
});

// Main endpoint for searching activities
app.post('/api/search-activities', async (req, res) => {
  try {
    // Extract form data from request body
    const { city, kidsAges, availability, maxDistance, preferences } = req.body;

    // Validate required fields
    if (!city || !kidsAges || !availability) {
      return res.status(400).json({
        error: 'Missing required fields: city, kidsAges, and availability are required'
      });
    }

    // Get current date to help Claude search for timely events
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Build a concise prompt emphasizing time-specific events
    const userPrompt = `Today is ${dateString}. Search the web for exactly 5 time-specific family events in ${city}.

**Criteria:**
- Kids ages: ${kidsAges}
- When: ${availability}
- Max distance: ${maxDistance} miles from city center
- Preferences: ${preferences || 'None'}

**CRITICAL - Only recommend EVENTS with specific dates/times:**
- Search: "${city} events this weekend", event calendars, Eventbrite
- Each must have exact day/time (e.g., "Saturday 2-5pm", "Oct 5 10am")
- NO generic venues (not "visit museum" - only "Museum Night - Saturday 6pm")
- Focus: festivals, concerts, markets, special programs happening during "${availability}"

**Return JSON only:**
{
  "recommendations": [
    {
      "rank": 1,
      "title": "[Event Name] - [Exact Day/Time]",
      "emoji": "🎪",
      "description": "2-4 sentences about what makes this event special and fun for families.",
      "location": "Venue name",
      "distance": "X miles"
    }
  ]
}

Requirements:
- All 5 must be scheduled events with exact times during "${availability}"
- Variety of event types
- Age-appropriate for ${kidsAges} year olds
- Return only JSON, no extra text`;

    console.log('Sending request to Claude API...');
    console.log('Search criteria:', { city, kidsAges, availability, maxDistance, preferences });

    // Call Claude API with Web Search tool enabled
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search',
        }
      ],
      messages: [
        {
          role: 'user',
          content: userPrompt,
        }
      ],
    });

    console.log('Received response from Claude API');
    console.log('Response content blocks:', message.content.length);

    // Extract text response from Claude's message
    // Claude may use the web_search tool and then provide a text response
    let textResponse = '';
    for (const block of message.content) {
      if (block.type === 'text') {
        textResponse += block.text;
      }
    }

    console.log('Text response:', textResponse.substring(0, 200) + '...');

    // Parse JSON from the response
    // Try to extract JSON from code blocks or direct JSON
    let recommendations;

    // Try to find JSON in code blocks first
    const jsonMatch = textResponse.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      recommendations = JSON.parse(jsonMatch[1]);
    } else {
      // Try to parse the entire response as JSON
      // Remove any leading/trailing text that might not be JSON
      const jsonStart = textResponse.indexOf('{');
      const jsonEnd = textResponse.lastIndexOf('}') + 1;
      if (jsonStart !== -1 && jsonEnd > jsonStart) {
        const jsonStr = textResponse.substring(jsonStart, jsonEnd);
        recommendations = JSON.parse(jsonStr);
      } else {
        throw new Error('Could not find valid JSON in Claude\'s response');
      }
    }

    // Validate that we have recommendations
    if (!recommendations.recommendations || recommendations.recommendations.length === 0) {
      throw new Error('No recommendations found in response');
    }

    console.log(`Successfully parsed ${recommendations.recommendations.length} recommendations`);

    // Return recommendations to frontend
    res.json(recommendations);

  } catch (error) {
    console.error('Error in /api/search-activities:', error);

    // Send appropriate error response
    if (error.status === 401) {
      res.status(401).json({
        error: 'Invalid API key. Please check your ANTHROPIC_API_KEY environment variable.'
      });
    } else if (error instanceof SyntaxError) {
      res.status(500).json({
        error: 'Failed to parse Claude\'s response. Please try again.'
      });
    } else {
      res.status(500).json({
        error: error.message || 'An error occurred while searching for activities'
      });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Family Activity Finder API server running on http://localhost:${PORT}`);
  console.log(`📍 API endpoints:`);
  console.log(`   - GET  /api/health`);
  console.log(`   - POST /api/search-activities`);
});
