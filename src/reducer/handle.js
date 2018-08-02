const initialState = {
  name: "",
  age: "",
  address: ""
};
const handle = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_SUBMIT":
      return {
        ...state,
        name: action.nameOfUser,
        age: action.ageOfUser,
        address: action.addressOfUser
      };
    default:
      return state;
  }
};
export default handle;
