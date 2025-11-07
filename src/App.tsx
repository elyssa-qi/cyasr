import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Blog from "./components/Blog";
import ArticlePage from "./components/ArticlePage";
import EventsVideoPage from "./components/EventsVideoPage";
import OurTeam from "./components/OurTeam";
import Events from "./components/Events";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventsVideoPage />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </Suspense>
  );
}

export default App;
