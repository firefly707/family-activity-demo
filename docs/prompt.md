# Claude API Prompt for Family Activity Finder

## Prompt Template (Milestone 2)

This is the prompt that will be sent to Claude Messages API with the Web Search tool enabled.

---

## System Prompt
```
You are a family activity recommendation expert helping parents find the perfect weekend activities for their children. Your job is to search the web for real, current weekend activities and events that families can enjoy together.

Always search for actual events, venues, and activities happening in the specified city during the requested timeframe. Use the web search tool to find up-to-date information.

Return your recommendations in a specific format that can be easily parsed and displayed.
```

---

## User Prompt Template

```
Please search the web and find exactly 5 family-friendly weekend activities in {CITY} based on the following criteria:

**Family Details:**
- Kids ages: {KIDS_AGES}
- Available: {AVAILABILITY}
- Maximum distance: {MAX_DISTANCE} miles from city center
- Preferences: {PREFERENCES}

**Instructions:**
1. Use web search to find real, current, timely activities, events, venues, and attractions
2. Prioritize activities happening during the specified availability timeframe
3. Consider the kids' ages when selecting appropriate activities
4. Only suggest activities within the maximum distance
5. Take the preferences into account (indoor/outdoor, educational, budget-friendly, etc.)

**Output Format:**
For each of the 5 recommendations, provide:

1. **Title**: [Activity Name] - [Specific Day/Time]
   - Use the exact event name and specific timing (e.g., "Sunday 10am-4pm")

2. **Emoji**: Choose ONE emoji that represents the activity type
   - 🎨 Art/Museums
   - 🎭 Theater/Performance
   - 🚋 Transit/Transportation
   - 🎪 Festival/Fair
   - 🏛️ Historical/Educational
   - 🎵 Music/Concert
   - ⚽ Sports/Recreation
   - 🌳 Nature/Outdoors
   - 🍕 Food/Dining
   - 🎢 Amusement/Fun
   - (or choose another relevant emoji)

3. **Description**: Write 2-4 sentences describing:
   - What makes this activity special or fun
   - What families can expect to do/see
   - Any relevant details (free/paid, special features, etc.)

4. **Location**: The specific venue or place name

5. **Distance**: Approximate distance from city center in miles

Format your response as a JSON array with this structure:

```json
{
  "recommendations": [
    {
      "rank": 1,
      "title": "Muni Heritage Weekend - Sunday 10am-4pm",
      "emoji": "🚋",
      "description": "A special event where families can ride vintage transit vehicles that are rarely seen on San Francisco streets, including vintage buses and the Blackpool Boat Tram. All rides on these special streetcars are FREE all weekend.",
      "location": "San Francisco Railway Museum",
      "distance": "0.5 miles"
    },
    {
      "rank": 2,
      "title": "Greek Food Festival - Sunday 11am-8pm",
      "emoji": "🍕",
      "description": "The annual Greek Food Festival features delicious traditional food like Spanakopita and Moussaka, plus desserts and Greek music. Families can watch award-winning folk dance groups perform, and browse unique gifts from local vendors.",
      "location": "Mission District",
      "distance": "1.2 miles"
    }
  ]
}
```

**Important:**
- Return ONLY the JSON object, no additional text before or after
- Ensure all 5 recommendations are real, current activities you found via web search
- Verify activities are actually happening during the specified timeframe
- If you can't find 5 activities that perfectly match all criteria, broaden the search slightly but stay within the distance limit
- Prioritize variety (don't suggest 5 museums; mix it up!)
```

---

## Example API Request (Node.js/Express)

```javascript
const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function searchActivities(userInputs) {
  const { city, kidsAges, availability, maxDistance, preferences } = userInputs;

  // Build the user prompt with actual values
  const userPrompt = `Please search the web and find exactly 5 family-friendly weekend activities in ${city} based on the following criteria:

**Family Details:**
- Kids ages: ${kidsAges}
- Available: ${availability}
- Maximum distance: ${maxDistance} miles from city center
- Preferences: ${preferences || 'No specific preferences'}

**Instructions:**
1. Use web search to find real, current activities, events, venues, and attractions
2. Prioritize activities happening during the specified availability timeframe
3. Consider the kids' ages when selecting appropriate activities
4. Only suggest activities within the maximum distance
5. Take the preferences into account (indoor/outdoor, educational, budget-friendly, etc.)

**Output Format:**
For each of the 5 recommendations, provide:

[... rest of prompt template ...]

Return ONLY the JSON object, no additional text before or after.`;

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4000,
    tools: [
      {
        type: 'web_search_20250929',
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

  // Parse Claude's response
  // Handle tool use and extract JSON from final text response
  return parseClaudeResponse(message);
}
```

---

## Input Field Mapping

When the user submits the form, map the fields like this:

| Form Field | Variable | Example Value |
|------------|----------|---------------|
| City | `{CITY}` | "San Francisco" |
| Kid Ages | `{KIDS_AGES}` | "7" or "5, 8, 12" |
| Date & Time Availability | `{AVAILABILITY}` | "sunday (tomorrow)" or "Saturday afternoon" |
| Maximum Distance (slider) | `{MAX_DISTANCE}` | "10" |
| Optional Preferences | `{PREFERENCES}` | "indoor activities, educational, budget-friendly" |

---

## Response Parsing

The backend should:

1. **Extract JSON** from Claude's response (handle both direct JSON and text with JSON embedded)
2. **Validate** that there are exactly 5 recommendations
3. **Format** for frontend:
   ```javascript
   {
     "recommendations": [
       {
         "rank": 1,
         "title": "...",
         "emoji": "...",
         "description": "...",
         "location": "...",
         "distance": "..."
       }
     ]
   }
   ```
4. **Error handling** if:
   - Claude returns fewer than 5 recommendations
   - JSON parsing fails
   - Web search finds no results

---

## Notes for Milestone 2 Implementation

### Web Search Tool Configuration
- Tool type: `web_search_20250929`
- Name: `web_search`
- No additional parameters needed - Claude decides when to use it

### Prompt Engineering Tips
1. **Be specific** - Ask for JSON format explicitly
2. **Use examples** - Show the exact structure you want
3. **Set constraints** - "exactly 5", "2-4 sentences", "within X miles"
4. **Guide the search** - Tell Claude to prioritize timeframe and age-appropriateness

### Expected Claude Behavior
1. Claude will use web_search tool automatically when it needs current information
2. It may make multiple searches (e.g., "San Francisco weekend events kids", "San Francisco museums", etc.)
3. Final response will be the formatted JSON with recommendations

### Testing the Prompt
Start with these test inputs:
- City: "San Francisco"
- Kids Ages: "7"
- Availability: "Sunday (tomorrow)"
- Max Distance: "10 miles"
- Preferences: "indoor activities, educational"

---

## Alternative: If JSON Parsing is Difficult

You can also ask Claude to return markdown format and parse it on the backend:

```
Return each recommendation in this format:

---
## 1. [Activity Title]
**Emoji:** 🎨
**Description:** [2-4 sentences]
**Location:** [Venue name]
**Distance:** [X miles]
---
```

Then use regex to extract the fields. However, JSON is preferred for reliability.
