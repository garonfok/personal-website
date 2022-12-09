import React from "react"

import { Home } from "./pages/Home"

import { Route, Routes } from 'react-router-dom'

class App extends React.Component {
  render = () => {
    return (

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    )
  }
}

export default App
