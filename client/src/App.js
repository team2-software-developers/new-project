import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Phenomenon from "./components/Phenomenon"
import About from "./components/About"


function App() {
  return (
    <Router>

      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/phenomenon">
        <Phenomenon />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
    </Router>
  )
}

export default App;
