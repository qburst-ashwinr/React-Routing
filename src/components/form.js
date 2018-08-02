import React from "react";
import { formHandler } from "../action";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  handleForm: (name, age, address) => {
    dispatch(formHandler(name, age, address));
  }
});

class FormHandler extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      details: {}
    };
  }

  handleChange(e) {
    let detail = this.state.details;
    switch (e.target.name) {
      case "name":
        detail.name = e.target.value;
        break;
      case "age":
        detail.age = e.target.value;
        break;
      case "address":
        detail.address = e.target.value;
        break;
      default: alert("Nothing found");
    }
    this.setState({ ...detail });
  }

  handleSubmit(e) {
    const name = this.state.details.name;
    const age = this.state.details.age;
    const address = this.state.details.address;
    this.props.handleForm(name, age, address);
    if ((name === undefined) | (age === undefined) | (address === undefined)) {
      console.log(name);
      alert("Fill all the form fields.");
    } else {
      console.log(name);
      alert("check Output page");
    }
  }

  render() {
    return (
      <div>
        <h3>Enter Your details</h3>
        <form className="formClass">
          <input
            placeholder="Enter your Name"
            name="name"
            type="text"
            id="nameId"
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Enter your age"
            name="age"
            type="number"
            id="ageId"
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Enter your address"
            name="address"
            type="text"
            id="addressId"
            onChange={this.handleChange}
          />
          <input type="button" onClick={this.handleSubmit} value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FormHandler);
