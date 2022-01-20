import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export class Apothecary extends React.Component {
  state = {
    apothecaryList: "",
    apothecarySearch: "",
  }

  componentWillMount() {
    if(this.props.adminGlobal.namaAdmin){
        console.log("authorized")
    } else {
        this.redirectHandler();
    }
  }

  redirectHandler = () => {
    this.setState({redirect: true})
  }

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value })
    console.log(this.state)
  }

  render() {

    const { redirect } = this.state;
    if(redirect) {
        return <Redirect to="/"/>
    }

    return (
    <div>
        <div className="admin_mgmt-header">
            <h2>Apothecary Management</h2>
        </div>
        <Form className="admin_mgmt-actions">
            <FormGroup>
              <Label for="read_apothecary">Read</Label>
              <Button className="admin_mgmt-actionButton">See All Apothecary</Button>
            </FormGroup>
            <FormGroup>
              <Label for="add_apothecary">Create</Label>
              <Input type="text" name="namaApoteker" placeholder="Please type his/her name" onChange={this.inputHandler} />
              <Input type="text" name="kodeApoteker" placeholder="Please type his/her ID" onChange={this.inputHandler} />
              <Button className="admin_mgmt-actionButton">Add Apothecary</Button>
            </FormGroup>
            <FormGroup>
              <Label for="edit_apothecary">Update</Label>
              <Input type="text" name="kodeApoteker" placeholder="Please type his/her ID" onChange={this.inputHandler} />
              <Button className="admin_mgmt-actionButton">Search Apothecary</Button>
            </FormGroup>
            <FormGroup>
              <Label for="delete_apothecary">Delete</Label>
              <Input type="text" name="kodeApoteker" placeholder="Please type his/her ID" onChange={this.inputHandler} />
              <Button className="admin_mgmt-actionButton">Delete Apothecary</Button>
            </FormGroup>
        </Form>
    </div>
    )
  }
}

export default Apothecary