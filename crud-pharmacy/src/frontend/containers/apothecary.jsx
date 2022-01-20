import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { API_URL } from "../constants/API";
import Axios from 'axios';
import { addApothecary, deleteApothecary } from "../redux/actions/admin"; 

export class Apothecary extends React.Component {
  state = {
    apothecaryList: "",
    apothecarySearch: "",
    listPlaceHolder: "No Staff rendered yet"
  }

  componentWillMount() {
    if(this.props.adminGlobal.role === 'admin'){
        console.log("authorized")
    } else {
        this.redirectHandler();
    }
  }

  refreshPage = () => {
    window.location.reload(false);
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

  searchAll = () => {
      Axios.get(API_URL + "/search/all", {
      })
        .then((res) => {
          alert("Search finished");
          console.log(res.data[0]);
            this.setState({ 
              apothecaryList: res.data,
            })
            this.renderApothecaryList()
        })
        .catch((err) => {
          alert("Search failed");
          console.log(err);
        });
      };

  renderApothecaryList = () => {
    if(this.state.apothecaryList[0]){
    
    return this.state.apothecaryList.map((val)=>{
      console.log(val.namaApoteker)
      return(
        <tr>
          <td>{val.namaApoteker}</td>
          <td>{val.kodeApoteker}</td>
        </tr>
      )
    })
  } else {
        return(
          <div>
            Nothing here
          </div> 
        )
      }
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
              <Button className="admin_mgmt-actionButton" onClick={()=>{this.searchAll()}}>See All Apothecary</Button>
              <table className="table" style={{width:'100%', height:'100%'}}>
              <thead className="table" >
                <tr>
                  <th scope="col">Nama</th>
                  <th scope="col">Kode</th>
                </tr>
              </thead>
              <tbody>
                {this.renderApothecaryList()}
              </tbody> 
              </table>
            </FormGroup>
            <FormGroup>
              <Label for="add_apothecary">Create</Label>
              <Input type="text" name="namaApoteker" placeholder="Please type his/her name" onChange={this.inputHandler} />
              <Input type="text" name="kodeApoteker" placeholder="Please type his/her ID" onChange={this.inputHandler} />
              <Input type="date" name="tglLahirApoteker" placeholder="Please type his/her Birth date" onChange={this.inputHandler} />
              <Button className="admin_mgmt-actionButton" onClick={()=>{this.props.addApothecary(this.state) ; this.refreshPage()}}>Add Apothecary</Button>
            </FormGroup>
            <FormGroup>
              <Label for="edit_apothecary">Update</Label>
              <Input type="text" name="kodeApoteker" placeholder="Please type his/her ID" onChange={this.inputHandler} />
              <Input type="text" name="namaApoteker" placeholder="Please type his/her name" onChange={this.inputHandler} />
              <Button className="admin_mgmt-actionButton">Update Apothecary</Button>
            </FormGroup>
            <FormGroup>
              <Label for="delete_apothecary">Delete</Label>
              <Input type="text" name="kodeApoteker" placeholder="Please type his/her ID" onChange={this.inputHandler} />
              <Button className="admin_mgmt-actionButton" onClick={()=>{this.props.deleteApothecary(this.state) ; this.refreshPage()}}>Delete Apothecary</Button>
            </FormGroup>
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
  addApothecary,
  deleteApothecary
}

export default connect(mapStateToProps, mapDispatchToProps)(Apothecary);