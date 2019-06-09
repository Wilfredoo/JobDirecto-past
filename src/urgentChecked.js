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
    console.log(this.state);
  }

  render() {
    return (
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio TOP</h1>
        <img id="urgentExample" src="urgentExample.png" />
        <p className="UrgentCheckedText">
          Los anuncios TOP son de color amarillo y se mantienen arriba en la
          lista por 48 horas. <br />
          <br /> Los anuncios TOP tienen un costo de 10$. <br />
          <br />
          Desea comprar uno? <br />
          <br />
        </p>
        <StripeButton />

        <button onClick={this.cancelUrgency} id="UrgentCheckedButtonNO">
          NO <br /> (quiero un anuncio gratis y normal)
        </button>
      </div>
    );
  }
}
