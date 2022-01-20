import Axios from 'axios';
import { API_URL } from "../../constants/API";

export const loginAction = (data) => {
    return (dispatch) => {
      Axios.post(API_URL + "/login/", {
        namaAdmin: data.username,
        passwordAdmin: data.password,
      })
        .then((res) => {
          //delete res.data.dataLogin.password;
          localStorage.setItem("adminDataXYZ", res.data.token);
          dispatch({
            type: "USER_LOGIN",
            payload: res.data.dataLogin,
          });
        })
        .catch((err) => {
          alert("Login failed");
          console.log(err);
        });
    };
  };

  export const adminKeepLogin = (data) => {
    //console.log(data)
    return (dispatch) => {
      Axios.get(API_URL + `/keeploggedIn/`, {
        headers: {
          "Authorization": `Bearer ${data}`
        }
      })
        .then((res) => {
          console.log(res)
          // delete res.data.passwordAdmin;
          dispatch({
            type: "USER_LOGIN",
            payload: res.data[0],
          });
        })
        .catch((err) => {
          alert(err);
        });
    };
  };

  export const logoutAction = () => {
    localStorage.removeItem("adminDataXYZ");
    return {
      type: "USER_LOGOUT",
    };
  };

  export const addApothecary = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/apothecary/add", {
        namaApoteker: data.namaApoteker,
        kodeApoteker: data.kodeApoteker,
        tanggalLahir: data.tglLahirApoteker
      })
        .then((res) => {
          alert("Apothecary successfully added");
        })
        .catch((err) => {
          alert("Apothecary  Registration failed");
          console.log(err);
        });
      };
  };

  export const deleteApothecary = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/apothecary/delete", {
        kodeApoteker: data.kodeApoteker,
      })
        .then((res) => {
          alert("Apothecary successfully removed");
        })
        .catch((err) => {
          alert("Apothecary failed to remove");
          console.log(err);
        });
      };
  };

  export const addDrugs = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/stock/add", {
        namaObat: data.namaObat,
        kodeObat: data.kodeObat,
        hargaObat: data.hargaObat,
        sisaObat : data.sisaObat,
        tanggalObat : data.tanggalObat
      })
        .then((res) => {
          alert("Drug stock successfully added");
        })
        .catch((err) => {
          alert("Drug stock  Registration failed");
          console.log(err);
        });
      };
  };

  export const deleteStock = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/stock/delete", {
        kodeObat: data.kodeObat,
      })
        .then((res) => {
          alert("stock successfully removed");
        })
        .catch((err) => {
          alert("stock failed to remove");
          console.log(err);
        });
      };
  };

  export const addTransaction = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/stock/sold", {
        idTransaksi: data.idTransaksi,
        kodeObat: data.kodeObat,
        jumlahJual: data.jumlahJual,
        kodeApoteker : data.kodeApoteker,
        tanggalBeli : data.tanggalBeli
      })
        .then((res) => {
          alert("Transaction successfully added");
        })
        .catch((err) => {
          alert("Transaction Registration failed");
          console.log(err);
        });
      };
  };

  export const deleteTransaction = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/stock/remove", {
        idTransaksi: data.idTransaksi,
      })
        .then((res) => {
          alert("transaction successfully removed");
        })
        .catch((err) => {
          alert("transaction failed to remove");
          console.log(err);
        });
      };
  };
