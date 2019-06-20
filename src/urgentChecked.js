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
<<<<<<< HEAD
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio azul</h1>
=======
        <h1 id="UrgentCheckedTitle" className="heading-1">
          Usted a marcado anuncio CALIDAD
        </h1>
>>>>>>> 0c842b5a1539ff43158bcf03a0794a1d78024ef8
        <img id="urgentExample" src="urgentExample.png" />
        <p className="UrgentCheckedText">
          Los anuncios azules los ven muchas mas personas. <br />
          <br />
          Quienes usan anuncios azules se diferencian del resto y consiguen
          gente mas rapido y con experiencia. Cuestan tan solo 10$.
          <br />
          <br />
        </p>
        <StripeButton />

        <button
          onClick={this.cancelUrgency}
          id="UrgentCheckedButtonNO"
          className="btn-primary"
        >
          Quiero un anuncio gratis y común <br />
        </button>
      </div>
    );
  }
}
