import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}