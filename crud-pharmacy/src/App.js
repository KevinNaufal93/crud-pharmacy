import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path='/home' component={AdminHome} />
          <Route path='/ibd' component={Inbound} />
          <Route path='/obd' component={Outbound} />
          <Route path='/stk' component={Stock} />
          <Route path='/apth' component={Apothecary} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
      )
    }
}

export default App;
