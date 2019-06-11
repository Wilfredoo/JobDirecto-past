import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StripeButton from "./stripebutton.js";

export default class UrgentChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cancelUrgency = this.cancelUrgency.bind(this);
    // this.wantsToPay = this.wantsToPay.bind(this);
  }

  cancelUrgency(event) {
    console.log("someone does not want to pay");
    event.preventDefault();
    axios.post("/cancelUrgency").then(resp => {
      this.props.history.push("/jobConfirm");
    });
  }

  render() {
    return (
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio TOP</h1>
        <img id="urgentExample" src="urgentExample.png" />
        <p className="UrgentCheckedText">
          Los anuncios TOP son de color dorado y se mantienen arriba en la lista
          por 48 horas. Tienen un costo de 10$ y lo usan quienes buscan staff
          con urgencia. <br />
          <br />
          <br />
        </p>
        <StripeButton />

        <button onClick={this.cancelUrgency} id="UrgentCheckedButtonNO">
          Cambie de opinion, deseo un anuncio gratis y celeste <br />
        </button>
      </div>
    );
  }
}
