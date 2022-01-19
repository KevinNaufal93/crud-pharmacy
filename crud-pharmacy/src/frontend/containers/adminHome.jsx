import React from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import '../assets/styles/admin.css';

export class AdminHome extends React.Component {

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
                <div className="admin_home-header">
                    <h2>Pick your action</h2>
                </div>
                <div className="admin_home-actions">
                    <Button className="admin_home-actionButton">Inbound Stock</Button>
                    <Button className="admin_home-actionButton">Outbound Stock</Button>
                    <Button className="admin_home-actionButton">Stock Report</Button>
                    <Button className="admin_home-actionButton">Apothecary Management</Button>
                </div>
            </div>
        )
    }
}

export default AdminHome
