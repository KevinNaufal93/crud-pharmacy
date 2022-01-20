import React from 'react';
import { Button } from 'reactstrap';
import { Redirect, Link } from "react-router-dom";
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
                    <Link to="/ibd" style={{ textDecoration: 'none'}}>
                        <Button className="admin_home-actionButton">Inbound Stock</Button>
                    </Link>
                    <Link to="/obd" style={{ textDecoration: 'none'}}>
                        <Button className="admin_home-actionButton">Outbound Stock</Button>
                    </Link>
                    <Link to="/stk" style={{ textDecoration: 'none'}}>
                        <Button className="admin_home-actionButton">Stock Report</Button>
                    </Link>
                    <Link to="/apth" style={{ textDecoration: 'none'}}>
                        <Button className="admin_home-actionButton">Apothecary Management</Button>
                    </Link>
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
