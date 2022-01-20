import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { API_URL } from "../constants/API";
import Axios from 'axios';
import { addDrugs, deleteStock, updateStock } from "../redux/actions/admin"; 


export class Inbound extends React.Component {
  state = {
    kodeObat: "",
    namaObat: "",
    hargaObat: "",
    sisaObat: "",
    searchStock:""
  }

  componentWillMount() {
    if(this.props.adminGlobal.role === 'admin'){
        console.log("authorized")
    } else {
        this.redirectHandler();
    }
  }

  redirectHandler = () => {
    this.setState({redirect: true})
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value })
    console.log(this.state)
  }

  searchAllStock = () => {
    Axios.get(API_URL + "/stock/in", {
    })
      .then((res) => {
        alert("Search finished");
        console.log(res.data[0]);
          this.setState({ 
            searchStock: res.data,
          })
          this.renderInboundList()
      })
      .catch((err) => {
        alert("Search failed");
        console.log(err);
      });
    };

  renderInboundList = () => {
    if(this.state.searchStock[0]){
    
    return this.state.searchStock.map((val)=>{
      console.log(val.kodeObat)
      return(
        <tr>
          <td>{val.kodeObat}</td>
          <td>{val.namaObat}</td>
          <td>{val.hargaObat}</td>
          <td>{val.sisaObat}</td>
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
            <h2>Inbound Stock Management</h2>
        </div>
        <Form className="admin_mgmt-actions">
            <FormGroup>
                <Label for="read_stock">Read</Label>
                <Button className="admin_mgmt-actionButton" onClick={()=>{this.searchAllStock()}}>See All Inbound Stock</Button>
                <table className="table" style={{width:'100%', height:'100%'}}>
              <thead className="table" >
                <tr>
                  <th scope="col">Kode</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Sisa</th>
                </tr>
              </thead>
              <tbody>
                {this.renderInboundList()}
              </tbody> 
              </table>
            </FormGroup>    
            <FormGroup>
                <Label for="create_stock">Create</Label>
                
                <Input type="text" name="kodeObat" placeholder="Please type medicine ID" onChange={this.inputHandler} />
                <Input type="text" name="namaObat" placeholder="Please type name of medicine" onChange={this.inputHandler} />
                <Input type="number" name="hargaObat" placeholder="Please type the price of medicine" onChange={this.inputHandler} />
                <Input type="number" name="sisaObat" placeholder="Please input the inbound stock" onChange={this.inputHandler} />
                <Input type="date" name="tanggalObat" placeholder="Please type the date of medicine" onChange={this.inputHandler} />
                <Button className="admin_mgmt-actionButton" onClick={()=>{this.props.addDrugs(this.state) ; this.refreshPage()}}>Add Inbound Stock</Button>
            </FormGroup>
            <FormGroup>
                <Label for="update_stock">Update</Label>
                <Input type="text" name="kodeObat" placeholder="Please type medicine ID" onChange={this.inputHandler} />
                <Input type="text" name="sisaObat" placeholder="Please input the inbound stock" onChange={this.inputHandler} />
                <Button className="admin_mgmt-actionButton" onClick={()=>{this.props.updateStock(this.state) ; this.refreshPage()}}>Update Transaction</Button>
            </FormGroup>
            <FormGroup>
                <Label for="delete_stock">Delete</Label>
                <Input type="text" name="kodeObat" placeholder="Please type medicine ID" onChange={this.inputHandler} />
                <Button className="admin_mgmt-actionButton" onClick={()=>{this.props.deleteStock(this.state) ; this.refreshPage()}}>Delete Stock</Button>
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
  addDrugs,
  deleteStock,
  updateStock
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbound);
