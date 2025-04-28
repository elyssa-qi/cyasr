import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Blog from "./components/Blog";
import ArticlePage from "./components/ArticlePage";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </Suspense>
  );
}

export default App;
