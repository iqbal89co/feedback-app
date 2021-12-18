import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./components/pages/AboutPage";
import AboutLinkIcon from "./components/AboutLinkIcon";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutLinkIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
