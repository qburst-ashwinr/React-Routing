import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  name: state.handle.name,
  age: state.handle.age,
  address: state.handle.address
});

const output = ({ name, age, address }) => (
  <div>
    {name}
    <br />
    {age}
    <br />
    {address}
    <br />
  </div>
);

export default connect(mapStateToProps)(output);
