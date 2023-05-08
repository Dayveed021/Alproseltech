import "./App.css";
import LandingPage from "./Components/Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Service from "./Components/Pages/Service";
import Portfolio from "./Components/Pages/Portfolio";
import Blog from "./Components/Pages/Blog";
import ContactUs from "./Components/Pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
