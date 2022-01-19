import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';

export class Outbound extends React.Component {
  state = {

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
            <h2>Outbound Stock Management</h2>
        </div>
        <Form className="admin_mgmt-actions">
            <FormGroup>
                <Label for="read_stock">Read</Label>
                <Button className="admin_mgmt-actionButton">See All Transactions</Button>
            </FormGroup>    
            <FormGroup>
                <Label for="create_stock">Create</Label>
                <Input type="text" name="kodeObat" placeholder="Please type medicine ID" onChange={this.inputHandler} />
                <Input type="text" name="namaObat" placeholder="Please type name of medicine" onChange={this.inputHandler} />
                <Input type="number" name="hargaObat" placeholder="Please type the price of medicine" onChange={this.inputHandler} />
                <Input type="number" name="sisaObat" placeholder="Please input the inbound stock" onChange={this.inputHandler} />
                <Input type="date" name="tanggalObat" placeholder="Please type the date of medicine" onChange={this.inputHandler} />
                <Button className="admin_mgmt-actionButton">Add Transaction</Button>
            </FormGroup>
            <FormGroup>
                <Label for="update_stock">Update</Label>
                <Input type="text" name="kodeObat" placeholder="Please type medicine ID" onChange={this.inputHandler} />
                <Input type="text" name="sisaObat" placeholder="Please input the inbound stock" onChange={this.inputHandler} />
                <Button className="admin_mgmt-actionButton">Update Transaction</Button>
            </FormGroup>
            <FormGroup>
                <Label for="delete_stock">Delete</Label>
                <Input type="text" name="kodeObat" placeholder="Please type medicine ID" onChange={this.inputHandler} />
                <Button className="admin_mgmt-actionButton">Delete Transaction</Button>
            </FormGroup>
        </Form>
    </div>
    )
  }
}

export default Outbound;