import React from 'react';
import { Button } from 'reactstrap';
import { Redirect } from "react-router-dom";
import { logoutAction } from "../redux/actions/admin"; 
import { connect } from "react-redux";
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

    redirectHandler = () => {
        this.setState({redirect: true})
    }

    render() {

        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }

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
                    <Button className="admin_home-actionButton" onClick={()=>{this.props.logoutAction(this.state) ; this.redirectHandler()}}>Log Out</Button>
                </div>
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
    logoutAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
