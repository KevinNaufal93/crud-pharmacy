import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { connect } from "react-redux";  
import Home from "./frontend/containers/home";


class App extends React.Component {

    render () {
      return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      )
    }
}

export default App;
