import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom"
import { Kennel } from "./components/Kennel"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Kennel />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);