import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Products />
      <About />

      <Reviews />
      <Newsletter />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
