import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import '../assets/styles/home.css';

export class Home extends React.Component {

    state = {
        email: "",
        password: ""
    }

    inputHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="home_login-header">
                    <h2>Welcome to Kevin's Apothecary Website</h2>
                </div>
                <Form className="home_login-form">
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="email" placeholder="enter your email" onChange={this.inputHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password" name="password" placeholder="enter your password" onChange={this.inputHandler}/>
                    </FormGroup>
                    <Button>Login Now!</Button>
                </Form>
            </div>
        )
    }
}

export default Home
