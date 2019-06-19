import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.error;
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios
      .post("/login", this.state)
      .then(data => {
        if (data.data.success) {
          location.replace("/jobform");
        } else {
          this.setState({ error: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="login-container">
        <h1 className="heading-1">Login</h1>
        {this.state.error && (
          <div className="error">Email and/or password is incorrect.</div>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            className="formInputs"
            type="email"
            name="email"
            placeholder="Email"
            required="required"
            onChange={this.handleChange}
          />
          <input
            className="formInputs"
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            onChange={this.handleChange}
          />
          <br />
          <button className="submitbutton">Log In</button>
        </form>
      </div>
    );
  }
}
