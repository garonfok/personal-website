import React from "react"

import { Home } from "./pages/Home"
import { Resume } from "./pages/Resume"

import { Route, Routes } from 'react-router-dom'

class App extends React.Component {
  render = () => {
    return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    )
  }
}

export default App
