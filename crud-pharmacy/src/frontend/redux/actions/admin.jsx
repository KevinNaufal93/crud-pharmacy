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
