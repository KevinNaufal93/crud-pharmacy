import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { API_URL } from "../constants/API";
import Axios from 'axios';


export class Outbound extends React.Component {
  state = {
    kodeObat: "",
    namaObat: "",
    hargaObat: "",
    sisaObat: "",
    tanggalObat:"",
    transactionSearch:""
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

  searchAllTransaction = () => {
    Axios.get(API_URL + "/stock/out", {
    })
      .then((res) => {
        alert("Search finished");
        console.log(res.data[0]);
          this.setState({ 
            transactionSearch: res.data,
          })
          this.renderOutboundList()
      })
      .catch((err) => {
        alert("Search failed");
        console.log(err);
      });
    };

    renderOutboundList = () => {
      if(this.state.transactionSearch[0]){
      
      return this.state.transactionSearch.map((val)=>{
        console.log(val.kodeObat)
        return(
          <tr>
            <td>{val.kodeObat}</td>
            <td>{val.jumlahJual}</td>
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
            <h2>Outbound Stock Management</h2>
        </div>
        <Form className="admin_mgmt-actions">
            <FormGroup>
                <Label for="read_stock">Read</Label>
                <Button className="admin_mgmt-actionButton" onClick={()=>{this.searchAllTransaction()}}>See All Transactions</Button>
                  <table className="table" style={{width:'100%', height:'100%'}}>
                  <thead className="table" >
                    <tr>
                      <th scope="col">Kode</th>
                      <th scope="col">Jumlah Jual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderOutboundList()}
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

const mapStateToProps = (state) => {
  return {
      adminGlobal: state.admin,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Outbound);