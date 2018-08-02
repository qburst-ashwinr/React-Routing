export const formHandler = (formName, formAge, formAddress) => ({
  type: exampleActions.FORM_SUBMIT,
  nameOfUser: formName,
  ageOfUser: formAge,
  addressOfUser: formAddress
});
export const exampleActions = {
  FORM_SUBMIT: "FORM_SUBMIT"
};
