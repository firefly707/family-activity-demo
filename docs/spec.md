# Family Activity Finder - Specification

## Overview
A web application that helps parents discover weekend activities for their families based on location, kids' ages, availability, and preferences. The app returns 5 personalized activity recommendations with engaging descriptions and relevant emoji icons.

---

## Requirements

### Core Functionality
1. **Input Form** - Parents can enter:
   - City (text input)
   - Kid ages (text/number input)
   - Date & time availability (text input, e.g., "Saturday afternoon")
   - Maximum distance (slider, 1-50 miles)
   - Optional preferences (text input area for indoor/outdoor, educational, budget-friendly, etc.)

2. **Search & Results**
   - "Search Activities" button triggers API call
   - Display top 5 activity recommendations
   - Each recommendation includes:
     - Numbered ranking (#1, #2, etc.)
     - Bold title with event name and time
     - Emoji representing activity type
     - 2-4 sentence description
     - Location name and distance

3. **User Experience**
   - "New Search" button to start over
   - Clean, family-friendly interface
   - Loading state while searching
   - Clear visual hierarchy

---

## Tech Stack

### Frontend
- **React** - UI components and state management
- **CSS/Tailwind CSS** - Styling (matching the provided design). Install Tailwind CSS v3 (instead of v4).
- **Vite** - Build tool and dev server

### Backend
- **Express.js** - Node.js server
- **Claude Messages API** - AI-powered activity recommendations
- **Web Search Tool** - Real-time activity and event discovery

### Development
- **Node.js** (v18+)
- **npm** - Package management

---

## Design Guidelines

### Visual Style (Based on Provided Screenshot)
- **Color Palette:**
  - Primary blue: `#4F7CFF` (Search button)
  - Light blue background: `#F8FAFE` (left sidebar)
  - White cards with subtle shadows
  - Red location pins: `#FF4F4F`
  - Gray text: `#6B7280` for secondary info

- **Typography:**
  - Sans-serif font family (e.g., Inter or system default)
  - Bold titles for recommendations
  - Clear hierarchy with font sizes and weights

- **Layout:**
  - Two-column layout: Form (left, ~35%) + Results (right, ~65%)
  - Form in a contained card with rounded corners
  - Results displayed as numbered list with spacing
  - Consistent padding and margins

- **Components:**
  - Input fields with labels and emoji prefixes
  - Slider with min/max labels for distance
  - Blue primary button with icon
  - Numbered badges for ranking (#1, #2, etc.)
  - Emoji icons for each activity type

### Interaction
- Smooth transitions and hover states
- Clear focus states for accessibility
- Responsive feedback on button clicks
- Loading spinner during API calls

---

## Milestones

### **Milestone 1: UI Setup with Dummy Data** 🎨
**Goal:** Build the complete user interface with static dummy data

**Tasks:**
1. Set up React project with Vite
2. Create main layout (two-column design)
3. Build form component with all 5 input fields
   - City text input
   - Kid ages input
   - Date/time availability input
   - Distance slider (1-50 miles)
   - Optional preferences textarea
4. Build results component displaying 5 hardcoded recommendations
   - Numbered ranking badges
   - Titles, emojis, descriptions
   - Location and distance info
5. Add styling to match the design screenshot
6. Implement "Search Activities" and "Clear" buttons (no functionality yet)
7. Add "New Search" button

**Deliverable:** Fully functional UI that displays static recommendations (no API calls)

---

### **Milestone 2: Claude API Integration with Web Search** 🔌
**Goal:** Connect to Claude Messages API with web search tool to generate real recommendations

**Tasks:**
1. Set up Express.js backend server
2. Create API endpoint `/api/search-activities`
3. Integrate Claude Messages API with Web Search tool
   - Reference: https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool
   - Configure tool use for activity discovery2
4. Build prompt that includes user inputs (city, ages, time, distance, preferences)
   - **Use the complete prompt template from `prompt.md`**
   - Replace placeholders: `{CITY}`, `{KIDS_AGES}`, `{AVAILABILITY}`, `{MAX_DISTANCE}`, `{PREFERENCES}`
   - Request JSON output format for easy parsing
5. Parse Claude's response and format into 5 recommendations
6. Connect React frontend to backend endpoint
7. Add loading state and error handling
8. Test with real searches

**Deliverable:** Working app that searches for real activities and displays AI-generated recommendations

---

### **Milestone 3: Polish & Enhancements** ✨
**Goal:** Improve user experience and add helpful features

**Tasks:**
1. Add input validation (require city, ages, availability)
2. Improve error messages and edge cases
3. Add "copying" functionality (click to copy activity details)
4. Implement basic caching to avoid duplicate searches
5. Add accessibility improvements (ARIA labels, keyboard navigation)
6. Mobile responsive design
7. Add simple analytics or usage tracking (optional)
8. Performance optimization

**Deliverable:** Production-ready application with polished UX

---

## API Integration Details

### Claude Messages API with Web Search
- **Endpoint:** `https://api.anthropic.com/v1/messages`
- **Model:** `claude-3-5-sonnet-20241022` (or latest)
- **Tool:** Web Search (for real-time activity and event data)
- **Prompt Structure:**
  ```
  You are a family activity finder assistant. Search the web for real weekend
  activities and events in [CITY] suitable for kids aged [AGES] on [TIME].
  Maximum distance: [DISTANCE] miles. Preferences: [PREFERENCES].

  Return exactly 5 recommendations with:
  - Title (bold, with specific time)
  - Appropriate emoji
  - 2-4 sentence description
  - Location name
  - Distance from city center
  ```

### Response Format
Backend returns JSON:
```json
{
  "recommendations": [
    {
      "rank": 1,
      "title": "Muni Heritage Weekend - Sunday 10am-4pm",
      "emoji": "🚋",
      "description": "A special event where families can ride...",
      "location": "San Francisco Railway Museum",
      "distance": "0.5 miles"
    }
  ]
}
```

---

## Environment Variables
```
ANTHROPIC_API_KEY=your_api_key_here
PORT=3001
```

---

## Getting Started (After Milestone 1)
```bash
# Install dependencies
npm install

# Run frontend (Vite dev server)
npm run dev

# Run backend (after Milestone 2)
npm run server

# Run both concurrently
npm start
```

---

## Success Criteria
✅ Parents can input their criteria in an intuitive form
✅ App returns 5 relevant, real activities with specific details
✅ Results match the design screenshot styling
✅ Claude API with web search provides accurate, timely recommendations
✅ Loading states and errors are handled gracefully
✅ App is simple enough for non-technical users to understand and use
