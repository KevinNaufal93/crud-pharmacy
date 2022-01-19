import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { connect } from "react-redux";  
import Home from "./frontend/containers/home";
import AdminHome from "./frontend/containers/adminHome";
import Inbound from "./frontend/containers/inbound";
import Outbound from "./frontend/containers/outbound";
import Stock from "./frontend/containers/stock";
import Apothecary from "./frontend/containers/apothecary";


class App extends React.Component {

    render () {
      return (
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<AdminHome/>} />
          <Route path='/ibd' element={<Inbound/>} />
          <Route path='/obd' element={<Outbound/>} />
          <Route path='/stk' element={<Stock/>} />
          <Route path='/apth' element={<Apothecary/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      )
    }
}

export default App;
