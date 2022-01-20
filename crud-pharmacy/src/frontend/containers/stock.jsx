import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/styles/adminManagement.css';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux"; 
import { API_URL } from "../constants/API";
import Axios from 'axios';

export class Stock extends React.Component {

  state = {
    stockList: "",
    transactionList: "",
  }

  componentWillMount() {
    if(this.props.adminGlobal.namaAdmin){
        this.searchAllStock();
        this.searchAllTransaction();
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

  searchAllStock = () => {
    Axios.get(API_URL + "/stock/in", {
    })
      .then((res) => {
        alert("Search finished");
        console.log(res.data[0]);
          this.setState({ 
            stockList: res.data,
          })
          this.renderStockList()
      })
      .catch((err) => {
        alert("Search failed");
        console.log(err);
      });
    };

    renderStockList = () => {
    if(this.state.stockList[0]){
    
    return this.state.stockList.map((val)=>{
      console.log(val.kodeObat)
      return(
        <tr>
          <td>{val.kodeObat}</td>
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

  searchAllTransaction = () => {
    Axios.get(API_URL + "/stock/out", {
    })
      .then((res) => {
        alert("Search finished");
        console.log(res.data[0]);
          this.setState({ 
            transactionList: res.data,
          })
          this.renderTransactionList()
      })
      .catch((err) => {
        alert("Search failed");
        console.log(err);
      });
    };

    renderTransactionList = () => {
      if(this.state.transactionList[0]){
      
      return this.state.transactionList.map((val)=>{
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
            <h2>Apothecary Management</h2>
        </div>
        <Form className="admin_mgmt-actions">
        <table className="table" style={{width:'100%', height:'100%'}}>
          <thead className="table" >
            <tr>
              <th scope="col">Kode Barang</th>
              <th scope="col">Jumlah</th>
            </tr>
          </thead>
          <tbody>
          {this.renderStockList()}
          </tbody> 
        </table>
        <table className="table" style={{width:'100%', height:'100%'}}>
          <thead className="table" >
            <tr>
              <th scope="col">Kode Barang</th>
              <th scope="col">Jumlah Keluar</th>
            </tr>
          </thead>
          <tbody>
          {this.renderTransactionList()}
          </tbody> 
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stock);