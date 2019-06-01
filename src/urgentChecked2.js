import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";

export default class UrgentChecked2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // const script = document.createElement("script");
    //
    // script.src = "https://js.stripe.com/v3";
    // script.async = true;
    //
    // document.body.appendChild(script);
  }

  handleSubmit(event) {
    this.props.history.push("/JobConfirm");
  }

  render() {
    return (
      <div id="urgentCheckedContainer">
        <div id="error-message" />
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio amarillo</h1>
        <p className="UrgentCheckedText">
          Aun no tenemos listo el sistema de pago asi que le daremos el anuncio
          amarillo gratis. <br />
          <br />
        </p>
        <button onClick={this.handleSubmit} className="UrgentCheckedButton">
          Ok
        </button>
      </div>
    );
  }
}
