import React from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import CTA from "./components/CTA"
import Music from "./components/Music"

class App extends React.Component {
  render = () => {
    return (
      <main className="text-slate-900 bg-slate-200">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Music />
        <CTA />
        <Footer />
      </main>
    )
  }
}

export default App
