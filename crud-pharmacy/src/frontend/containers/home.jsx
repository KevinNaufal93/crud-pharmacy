import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";
import '../assets/styles/home.css';
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/admin";  

export class Home extends React.Component {

    state = {
        username: "",
        password: ""
    }

    componentWillMount() {
        if(this.props.adminGlobal.role === 'admin'){
            this.redirectHandler();
        } else {
            console.log("authorized")
        }
      }

    inputHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
        //console.log(this.state)
    }

    redirectHandler = () => {
        this.setState({redirect: true})
    }

    render() {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/home"/>
        }

        //console.log(this.state)

        return (
            <div>
                <div className="home_login-header">
                    <h2>XYZ Pharmacy Management</h2>
                </div>
                <Form className="home_login-form">
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" placeholder="enter your username" onChange={this.inputHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="enter your password" onChange={this.inputHandler}/>
                    </FormGroup>
                    <Button onClick={()=>{this.props.loginAction(this.state) ; this.redirectHandler()}}>Login Now!</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminGlobal: state.admin,
    }
}

const mapDispatchToProps = {
    loginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);