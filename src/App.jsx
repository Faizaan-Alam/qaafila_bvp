import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Execom from "./pages/Execom";
import Legacy from "./pages/Legacy";
import Results from "./pages/Results";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Writeups from "./pages/Writeups";
import WriteupDetail from "./pages/WriteupDetail";
import Memories from "./pages/Memories";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="execom" element={<Execom />} />
        <Route path="legacy" element={<Legacy />} />
        <Route path="results" element={<Results />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetail />} />
        <Route path="write-ups" element={<Writeups />} />
        <Route path="write-ups/:slug" element={<WriteupDetail />} />
        <Route path="memories" element={<Memories />} />
        <Route path="contact" element={<Contact />} />
        <Route path="join" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
