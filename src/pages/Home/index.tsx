

import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
import { Footer } from "./Footer"
import { About } from "./About"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { CTA } from "./CTA"
import { Music } from "./Music"

export const Home = () => {
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
