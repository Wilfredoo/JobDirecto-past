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
      .post("/register", this.state)
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
        <h1 className="heading-1">Register</h1>
        {this.state.error && (
          <div className="error">Este usuario ya esta registrado!</div>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            className="formInputs"
            type="text"
            name="email"
            placeholder="Email"
            required="required"
            onChange={this.handleChange}
          />
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
            placeholder="Contrasena"
            required="required"
            onChange={this.handleChange}
          />
          //{" "}
          <p className="ta">
            By clicking Sign Up, you agree to our{" "}
            <span className="fakelink">Terms</span>. Learn how we collect, use
            and share your data in our{" "}
            <span className="underline-link">Data Policy</span> and how we use
            cookies and similar technology in our{" "}
            <span className="underline-link">Cookies Policy</span>.
          </p>
          <br />
          <button className="submitbutton">Sign Up</button>
        </form>
      </div>
    );
  }
}
