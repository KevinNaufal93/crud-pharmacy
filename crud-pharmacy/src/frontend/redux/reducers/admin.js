const init_state = {

  username: "",
  password: "",
  kodeObat: "",
  namaObat: "",
  hargaObat: "",
  sisaObat: ""
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
        return {...state,...action.payload}
    case "USER_ERROR":
        return {...state, errMsg: action.payload}
    case "USER_LOGOUT":
        return {...init_state};
    default:
        return state;
  }
};

export default reducer;
