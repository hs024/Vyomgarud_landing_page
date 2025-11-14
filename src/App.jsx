import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <About />
        </section>
        <section
          id="capabilities"
          className="bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent"
        >
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Capabilities />
          </div>
        </section>
        <section id="highlights" className="max-w-6xl mx-auto px-6 py-16">
          <Highlights />
        </section>
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
