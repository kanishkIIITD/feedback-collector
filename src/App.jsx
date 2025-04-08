import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import AdminView from "./components/AdminView";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const fetchFeedbacks = async () => {
    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const res = await fetch(`${baseUrl}/feedbacks`);
      const data = await res.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleToggleAdmin = async () => {
    if (!showAdmin) await fetchFeedbacks();
    setShowAdmin(!showAdmin);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Feedback Collector
        </h1>
        <FeedbackForm />
        <div className="text-center mt-8">
          <button
            onClick={handleToggleAdmin}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            {showAdmin ? "Hide Submitted Feedback" : "View Submitted Feedback"}
          </button>
        </div>
        {showAdmin && <AdminView feedbacks={feedbacks} />}
      </div>
      <Footer name="Kanishk Singh" />
    </div>
  );
}

export default App;
