# Milestone 1 Todo List

## 🎨 Goal: Build Complete UI with Dummy Data

This milestone focuses on creating the visual interface and components WITHOUT connecting to any APIs. Everything will use hardcoded/dummy data so you can see how the app looks and works.

---

## Setup Tasks

### ✅ 1. Initialize React + Vite Project
**What:** Create a new React project using Vite build tool

**Steps:**
- [ ] Run `npm create vite@latest family-activity-finder -- --template react`
- [ ] Navigate into the project folder: `cd family-activity-finder`
- [ ] Install dependencies: `npm install`
- [ ] Test that it runs: `npm run dev`
- [ ] Visit `http://localhost:5173` to see default Vite/React app

**Why:** Vite is a fast build tool that makes React development easier. This sets up the foundation for your app.

---

### ✅ 2. Install and Configure Tailwind CSS v3
**What:** Add Tailwind CSS for styling (matching the design screenshot)

**Steps:**
- [ ] Install Tailwind: `npm install -D tailwindcss@^3 postcss autoprefixer`
- [ ] Initialize Tailwind config: `npx tailwindcss init -p`
- [ ] Edit `tailwind.config.js` to include:
  ```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
  ```
- [ ] Add Tailwind directives to `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- [ ] Test by adding a Tailwind class (like `className="text-blue-500"`) to a component

**Why:** Tailwind CSS lets you style components quickly with utility classes instead of writing custom CSS.

---

## Component Tasks

### ✅ 3. Create Main Layout Component
**What:** Build the two-column layout (form on left, results on right)

**File:** `src/components/Layout.jsx`

**Steps:**
- [ ] Create a new file `src/components/Layout.jsx`
- [ ] Build a container with two main sections:
  - Left column (~35% width): Will hold the form
  - Right column (~65% width): Will hold the results
- [ ] Add the header with app title and logo area
- [ ] Add "New Search" button in top-right corner
- [ ] Style with Tailwind to match the screenshot

**What it should look like:**
```
┌────────────────────────────────────────┐
│  🏠 Family Activity Finder    [New Search] │
├──────────┬─────────────────────────────┤
│          │                             │
│  Form    │  Results                    │
│  Area    │  Area                       │
│          │                             │
└──────────┴─────────────────────────────┘
```

**Why:** The layout component sets up the structure that all other components will fit into.

---

### ✅ 4. Create Form Component with All 5 Input Fields
**What:** Build the "Find Activities" form with all user inputs

**File:** `src/components/SearchForm.jsx`

**Input Fields to Create:**

- [ ] **City Input**
  - Label: "📍 City"
  - Type: text input
  - Placeholder: "San Francisco"
  - Default value: "San Francisco" (for testing)

- [ ] **Kid Ages Input**
  - Label: "👶 Kid Ages"
  - Type: text or number input
  - Placeholder: "e.g., 5, 8, 12"
  - Default value: "7"

- [ ] **Date & Time Availability Input**
  - Label: "🎫 Date & Time Availability"
  - Type: text input
  - Placeholder: "e.g., Saturday afternoon"
  - Default value: "sunday (tomorrow)"

- [ ] **Maximum Distance Slider**
  - Label: "🚗 Maximum Distance: 10 miles"
  - Type: range slider
  - Min: 1 mile, Max: 50 miles
  - Default value: 10 miles
  - Show current value in the label as user moves slider

- [ ] **Optional Preferences Text Area**
  - Label: "✨ Optional Preferences"
  - Type: textarea
  - Placeholder: "e.g., indoor activities, educational, budget-friendly"
  - Default value: empty (optional field)

**Additional Elements:**
- [ ] "🔍 Search Activities" button (blue, prominent)
- [ ] "Clear" button (to reset form)

**Why:** These inputs collect all the information needed to search for activities. Using default values makes testing easier during development.

---

### ✅ 5. Create Results Component with 5 Dummy Recommendations
**What:** Display a list of 5 hardcoded activity recommendations

**File:** `src/components/Results.jsx`

**Steps:**
- [ ] Create results container with title "Top 5 Recommendations"
- [ ] Add subtitle "Perfect matches for your family"
- [ ] Create 5 hardcoded recommendation cards

**Each recommendation card should include:**
- [ ] **Numbered badge** (e.g., `#1`, `#2`, etc.) - blue circle
- [ ] **Emoji icon** (e.g., 🚋, 🍕, 🎨)
- [ ] **Title** - Bold, includes event name and time
- [ ] **Description** - 2-4 sentences about the activity
- [ ] **Location** - Venue name with red pin icon (📍)
- [ ] **Distance** - Miles from city center with car icon (🚗)

**Dummy Data to Use:**
```javascript
const dummyRecommendations = [
  {
    rank: 1,
    title: "Muni Heritage Weekend - Sunday 10am-4pm",
    emoji: "🚋",
    description: "A special event where families can ride vintage transit vehicles that are rarely seen on San Francisco streets, including vintage buses and the Blackpool Boat Tram. All rides on these special streetcars are FREE all weekend.",
    location: "San Francisco Railway Museum",
    distance: "0.5 miles"
  },
  {
    rank: 2,
    title: "Greek Food Festival - Sunday 11am-8pm",
    emoji: "🍕",
    description: "The annual Greek Food Festival features delicious traditional food like Spanakopita and Moussaka, plus desserts and Greek music. Families can watch award-winning folk dance groups perform, and browse unique gifts from local vendors.",
    location: "Mission District",
    distance: "1.2 miles"
  },
  {
    rank: 3,
    title: "Sunday Funnies Exhibit - Sunday 10am-5pm",
    emoji: "🎨",
    description: "The Cartoon Art Museum's 40th anniversary showcase features classic comic strips from the dawn of the comics medium to the present day, including works from legendary cartoonists like Charles M. Schulz (Peanuts) and contemporary classics like Phoebe and Her Unicorn.",
    location: "Cartoon Art Museum",
    distance: "2 miles"
  },
  {
    rank: 4,
    title: "Lindy in the Park Dance Party - Sunday 11am-2pm",
    emoji: "💃",
    description: "A weekly free swing dance event near the de Young Museum when the streets of Golden Gate Park are closed to traffic. Get ready to swing in Golden Gate Park every sunny Sunday at this family-friendly dance gathering.",
    location: "Golden Gate Park",
    distance: "3.5 miles"
  },
  {
    rank: 5,
    title: "Exploratorium After Dark - Sunday 6pm-10pm",
    emoji: "🔬",
    description: "The Exploratorium opens its doors for an adults-and-kids evening of science, art, and human perception. Explore hundreds of interactive exhibits, watch live demonstrations, and enjoy special performances. This Sunday features a special family night.",
    location: "Exploratorium",
    distance: "1.8 miles"
  }
];
```

**Why:** Seeing real-looking results helps you visualize the final product and make design decisions before adding API complexity.

---

### ✅ 6. Style All Components to Match Design Screenshot
**What:** Apply Tailwind CSS classes to match the colors, fonts, spacing, and layout from the screenshot

**Colors to Use:**
- [ ] Primary blue: `bg-blue-500` or `#4F7CFF` for buttons
- [ ] Light background: `bg-blue-50` or `#F8FAFE` for form area
- [ ] White cards: `bg-white` with shadows
- [ ] Gray text: `text-gray-600` for secondary info
- [ ] Red pins: `text-red-500` for location icons

**Typography:**
- [ ] Use font sizes: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- [ ] Bold titles: `font-bold` or `font-semibold`
- [ ] Regular body text: `font-normal`

**Spacing & Layout:**
- [ ] Use padding: `p-4`, `p-6`, `px-4`, `py-2`, etc.
- [ ] Use margins: `mb-4`, `mt-2`, `space-y-4`, etc.
- [ ] Round corners: `rounded-lg`, `rounded-full` for badges
- [ ] Shadows: `shadow-sm`, `shadow-md`

**Visual Polish:**
- [ ] Add hover states to buttons: `hover:bg-blue-600`
- [ ] Add smooth transitions: `transition-colors duration-200`
- [ ] Make input fields look good: borders, padding, focus states

**Why:** Good styling makes the app look professional and easier to use. Matching the design ensures you're building what was envisioned.

---

### ✅ 7. Connect Components in Main App
**What:** Import and assemble all components in the main App.jsx file

**File:** `src/App.jsx`

**Steps:**
- [ ] Import Layout, SearchForm, and Results components
- [ ] Remove default Vite boilerplate code
- [ ] Set up basic React state (even though we're not using it yet):
  ```jsx
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  ```
- [ ] Render the layout with form and results

**Why:** This brings everything together into a working app.

---

### ✅ 8. Add Button Click Handlers (No API Calls)
**What:** Make buttons respond to clicks (but don't connect to backend yet)

**Steps:**
- [ ] Add `onClick` handler to "Search Activities" button
  - For now, just log "Search clicked!" to console
  - In Milestone 2, this will call the API

- [ ] Add `onClick` handler to "Clear" button
  - Reset all form fields to empty/default values

- [ ] Add `onClick` handler to "New Search" button
  - Clear results and reset form

**Why:** Setting up the event handlers now makes it easier to add real functionality in Milestone 2.

---

### ✅ 9. Add Loading State UI (Empty for Now)
**What:** Create a loading spinner component that will show when searching

**File:** `src/components/LoadingSpinner.jsx`

**Steps:**
- [ ] Create a simple loading spinner or "Searching..." message
- [ ] Style it nicely with Tailwind
- [ ] In `App.jsx`, show the spinner when `isLoading === true`
- [ ] For testing, you can temporarily set `isLoading` to `true` to see it

**Why:** Users need feedback when the app is working. This prepares the UI for async API calls in Milestone 2.

---

### ✅ 10. Test and Refine
**What:** Make sure everything looks good and works smoothly

**Steps:**
- [ ] Test all form inputs - type in each field
- [ ] Move the distance slider - verify the label updates
- [ ] Click "Search Activities" - check console for log
- [ ] Click "Clear" - verify form resets
- [ ] Click "New Search" - verify it works
- [ ] Compare your UI to the design screenshot side-by-side
- [ ] Fix any spacing, color, or alignment issues
- [ ] Make sure text is readable and components are aligned

**Why:** Catching small issues now prevents bigger problems later.

---

## 📋 Checklist Summary

**Setup:**
- [x] 1. Initialize React + Vite project
- [x] 2. Install and configure Tailwind CSS v3

**Components:**
- [x] 3. Create main layout
- [x] 4. Create form with 5 input fields
- [x] 5. Create results with 5 dummy recommendations
- [x] 6. Style components to match design
- [x] 7. Connect components in App.jsx
- [x] 8. Add button click handlers
- [x] 9. Add loading state UI
- [x] 10. Test and refine

**Bonus:**
- [x] Pushed to GitHub: https://github.com/firefly707/family-activity-demo
- [x] Running on localhost:5174

---

## ✅ Milestone 1 Complete When...

You have a working React app that:
- ✅ Shows a beautiful form with all 5 input fields
- ✅ Displays 5 hardcoded activity recommendations
- ✅ Matches the design screenshot's colors and layout
- ✅ Has working buttons (even if they don't call APIs yet)
- ✅ Looks professional and is easy to use

**Next:** Move to Milestone 2 to connect to the Claude API!

---

## 💡 Learning Notes

### What's a Component?
A component is a reusable piece of UI (like a form or a card). In React, you build your app by combining smaller components together.

### What's State?
State is data that can change over time (like form input values or whether the app is loading). React re-renders components when state changes.

### What's Dummy Data?
Fake data used during development to see how things will look. In Milestone 2, you'll replace it with real data from the API.

### Why Build UI First?
It's easier to see what you're building when you can click around and see results. Once the UI works, adding real data is straightforward.

---
---

# Milestone 2 Todo List

## 🔌 Goal: Connect to Claude API with Web Search

This milestone focuses on building the backend server and connecting to Claude Messages API to get real activity recommendations using web search.

---

## Backend Setup Tasks

### ⬜ 1. Set Up Express.js Backend Server
**What:** Create a Node.js/Express server to handle API requests

**Steps:**
- [ ] Create a new `server` directory in your project root
- [ ] Initialize a new Node.js project: `npm init -y` in the server folder
- [ ] Install Express and dependencies: `npm install express cors dotenv @anthropic-ai/sdk`
- [ ] Create `server/index.js` file
- [ ] Set up basic Express server on port 3001
- [ ] Add CORS middleware to allow frontend requests
- [ ] Test server runs: `node server/index.js`

**Why:** The backend keeps your API key secure (never expose it in frontend code) and acts as a middleman between your React app and Claude API.

---

### ⬜ 2. Create Environment Variables File
**What:** Store your Anthropic API key securely

**Steps:**
- [ ] Create `.env` file in the server directory
- [ ] Add: `ANTHROPIC_API_KEY=your_api_key_here`
- [ ] Add: `PORT=3001`
- [ ] Verify `.env` is in `.gitignore` (it should be!)
- [ ] Get your API key from: https://console.anthropic.com/settings/keys

**Why:** Environment variables keep sensitive data like API keys out of your code and Git history.

---

### ⬜ 3. Create API Endpoint for Activity Search
**What:** Build the `/api/search-activities` endpoint

**Steps:**
- [ ] Create `server/routes/activities.js` file
- [ ] Set up POST endpoint: `/api/search-activities`
- [ ] Endpoint should accept: `{ city, kidsAges, availability, maxDistance, preferences }`
- [ ] Add basic validation (check required fields)
- [ ] Add error handling middleware
- [ ] Test endpoint with Postman or curl

**Why:** This endpoint will receive search requests from your React app and return recommendations.

---

## Claude API Integration Tasks

### ⬜ 4. Integrate Claude Messages API with Web Search Tool
**What:** Connect to Claude API and enable web search tool

**Steps:**
- [ ] Import Anthropic SDK: `const Anthropic = require('@anthropic-ai/sdk')`
- [ ] Initialize client with API key
- [ ] Configure web search tool (type: `web_search_20250929`)
- [ ] Reference docs: https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/web-search-tool
- [ ] Test basic API call (without search first)

**Why:** Claude's web search tool finds real, current activities and events in the specified city.

---

### ⬜ 5. Build the Prompt with User Inputs
**What:** Use the prompt template from `prompt.md` and replace placeholders

**Steps:**
- [ ] Open `prompt.md` and copy the complete prompt template
- [ ] Create function to replace placeholders: `{CITY}`, `{KIDS_AGES}`, etc.
- [ ] Build the system prompt and user prompt
- [ ] Request JSON output format for easy parsing
- [ ] Set model to `claude-3-5-sonnet-20241022`
- [ ] Set max_tokens to 4000

**Why:** A well-structured prompt ensures Claude understands exactly what to search for and how to format results.

---

### ⬜ 6. Handle Claude's Response and Tool Use
**What:** Parse Claude's response and extract the 5 recommendations

**Steps:**
- [ ] Send message to Claude API with web search tool enabled
- [ ] Handle tool use responses (Claude may call web_search multiple times)
- [ ] Extract the final JSON response from Claude
- [ ] Parse JSON and validate it has 5 recommendations
- [ ] Add error handling for malformed responses
- [ ] Return formatted data to frontend

**Why:** Claude uses a multi-step process: it searches the web, analyzes results, then formats recommendations. We need to handle this flow properly.

---

## Frontend Connection Tasks

### ⬜ 7. Connect React Frontend to Backend
**What:** Update the search handler to call your backend API

**Steps:**
- [ ] Update `handleSearch` function in `App.jsx`
- [ ] Replace `setTimeout` with actual `fetch()` call
- [ ] Call: `POST http://localhost:3001/api/search-activities`
- [ ] Send form data in request body
- [ ] Handle response and update state with recommendations
- [ ] Keep loading state while waiting for response

**Why:** This connects your beautiful UI to the real backend, replacing dummy data with live results.

---

### ⬜ 8. Add Error Handling and Loading States
**What:** Handle errors gracefully and show helpful messages

**Steps:**
- [ ] Add try/catch around API call
- [ ] Create error state: `const [error, setError] = useState(null)`
- [ ] Create `ErrorMessage.jsx` component
- [ ] Show error message if API call fails
- [ ] Add timeout handling (30 seconds)
- [ ] Clear error when starting new search
- [ ] Test with intentionally broken API calls

**Why:** Real APIs can fail. Good error handling makes your app reliable and user-friendly.

---

### ⬜ 9. Test with Real Searches
**What:** Test the complete flow with different inputs

**Test Cases:**
- [ ] Search: San Francisco, age 7, Sunday afternoon, 10 miles
- [ ] Search: New York, ages 5,8,12, Saturday morning, 15 miles, "museums"
- [ ] Search: Los Angeles, age 10, weekend, 20 miles, "outdoor activities"
- [ ] Test error case: Empty city field
- [ ] Test error case: Backend server not running
- [ ] Verify all 5 recommendations display correctly
- [ ] Check that emojis, distances, and locations are accurate

**Why:** Testing ensures everything works together and catches bugs early.

---

### ⬜ 10. Add Concurrent Script for Dev Mode
**What:** Run frontend and backend together with one command

**Steps:**
- [ ] Install concurrently: `npm install -D concurrently`
- [ ] Update `package.json` scripts:
  ```json
  "scripts": {
    "dev": "vite",
    "server": "node server/index.js",
    "start": "concurrently \"npm run server\" \"npm run dev\""
  }
  ```
- [ ] Test: `npm start` should run both frontend and backend
- [ ] Verify frontend can connect to backend

**Why:** Running both servers with one command makes development faster and easier.

---

## 📋 Milestone 2 Checklist Summary

**Backend Setup:**
- [ ] 1. Set up Express.js server
- [ ] 2. Create environment variables file
- [ ] 3. Create API endpoint

**Claude Integration:**
- [ ] 4. Integrate Claude API with web search
- [ ] 5. Build prompt with user inputs
- [ ] 6. Handle Claude's response

**Frontend Connection:**
- [ ] 7. Connect React to backend
- [ ] 8. Add error handling
- [ ] 9. Test with real searches
- [ ] 10. Add concurrent dev script

---

## ✅ Milestone 2 Complete When...

You have a fully functional app that:
- ✅ Searches for real activities using Claude API
- ✅ Uses web search to find current events
- ✅ Returns 5 relevant recommendations with accurate details
- ✅ Handles errors gracefully
- ✅ Provides a smooth user experience from search to results

**Next:** Move to Milestone 3 for polish and enhancements!

---

## 💡 Learning Notes for Milestone 2

### What's an API?
An Application Programming Interface (API) is a way for different software to talk to each other. Claude's API lets your app send questions and get AI-generated answers back.

### What's a Backend Server?
The backend is code that runs on a server (not in the user's browser). It keeps secrets safe (like API keys) and handles complex operations.

### What's CORS?
Cross-Origin Resource Sharing (CORS) is a security feature. It controls which websites can make requests to your server. You need to enable it so your frontend (localhost:5174) can talk to your backend (localhost:3001).

### Why Use Web Search Tool?
Claude's web search tool gives it access to current information about events, places, and activities. Without it, Claude would only know information from its training data (which has a cutoff date).

### What's Tool Use?
Tool use lets Claude call external functions (like web search) during its response. Claude decides when to search, what to search for, and how to use the results—all automatically.
