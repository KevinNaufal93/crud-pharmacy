import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';

export class Apothecary extends React.Component {
  state = {
    apothecaryList: "",
    apothecarySearch: "",
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
        <div className="admin_mgmt-header">
            <h2>Apothecary Management</h2>
        </div>
        <Form className="admin_mgmt-actions">
            <Button className="admin_mgmt-actionButton">See All Apothecary</Button>
            <FormGroup>
            <Label for="add_apothecary">Add Apothecary</Label>
            <Input type="text" name="addApothecary" placeholder="Please type his/her name" onChange={this.inputHandler} />
            <Input type="text" name="addApothecaryId" placeholder="Please type his/her ID" onChange={this.inputHandler} />
            <Button className="admin_mgmt-actionButton">Add Apothecary</Button>
            </FormGroup>
            <FormGroup>
            <Label for="edit_apothecary">Edit Apothecary</Label>
            <Input type="text" name="editApothecary" placeholder="Please type his/her ID" onChange={this.inputHandler} />
            <Button className="admin_mgmt-actionButton">Search Apothecary</Button>
            </FormGroup>
            <FormGroup>
            <Label for="delete_apothecary">Delete Apothecary</Label>
            <Input type="text" name="deleteApothecary" placeholder="Please type his/her ID" onChange={this.inputHandler} />
            <Button className="admin_mgmt-actionButton">Delete Apothecary</Button>
            </FormGroup>
        </Form>
    </div>
    )
  }
}

export default Apothecary