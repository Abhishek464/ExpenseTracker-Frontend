💰 Expense Tracker – Frontend

A modern and responsive Expense Tracker Frontend built using React. This application allows users to manage their expenses efficiently with a clean UI and seamless integration with a backend API.

🚀 Features
📊 Add, view
🔄 Real-time updates with API integration
📱 Fully responsive UI (mobile + desktop)
⚡ Fast performance using modern frontend tooling
🔗 Backend integration via REST APIs
🛠️ Tech Stack
Frontend Framework: React
Build Tool: Vite
Styling: CSS / Tailwind (update if needed)
HTTP Client: Axios / Fetch API
State Management: React Hooks
📂 Project Structure
src/
├── components/
├── pages/
├── services/
├── hooks/
├── assets/
├── App.jsx
└── main.jsx
⚙️ Getting Started
Clone & Run
git clone https://github.com/Abhishek464/ExpenseTracker-Frontend.git
cd ExpenseTracker-Frontend
npm install
npm run dev
🔗 Environment Variables

Create a .env file:

VITE_API_URL=http://3.107.107.49:8080/

🔗 Backend Integration

This frontend consumes REST APIs for expense operations. Ensure backend is running and accessible.

🌐 Deployment

Deployed easily using platforms like Vercel or Netlify.

🧠 Design Decisions & Trade-offs
✅ Key Design Decisions
Component-based architecture
Broke UI into reusable components to keep code modular and maintainable.
Separation of concerns
API logic placed inside a dedicated services layer.
UI components remain clean and focused on rendering.
Environment-based configuration
Used VITE_API_URL to support multiple environments (local, staging, production).
Lightweight state management
Used React Hooks instead of heavier libraries (like Redux) to keep complexity low.


⚖️ Trade-offs (Due to Time Constraints)
Minimal state management
Avoided introducing Redux/Zustand to reduce setup time.
Trade-off: Less scalable for very large applications.
Basic error handling
Implemented simple error states instead of a global error boundary system.
Limited UI polish
Focus was on functionality over advanced styling and animations.
No advanced optimization
Skipped memoization, lazy loading, and performance tuning initially.


🚫 What Was Intentionally Not Implemented
Authentication & Authorization
Skipped to keep scope focused on core expense tracking.
Advanced analytics / charts
Not included to prioritize CRUD functionality.
Form validation libraries
Used basic validation instead of libraries like Formik or React Hook Form.
Testing (Unit / Integration)
Not added due to time constraints, but would be critical for production.
Offline support / caching
Not implemented to keep architecture simple.
🧠 Future Enhancements
🔐 Authentication system
📊 Expense analytics dashboard
📅 Filters & reports
⚡ Performance optimizations
🧪 Unit & integration tests

