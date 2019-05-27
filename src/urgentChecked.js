import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class UrgentChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wantsToPay = this.wantsToPay.bind(this);
    this.doesNotWantToPay = this.doesNotWantToPay.bind(this);
  }

  wantsToPay(event) {
    event.preventDefault();
    this.props.history.push("/urgentChecked2");
  }

  doesNotWantToPay(event) {
    event.preventDefault();
    axios.post("/cancelUrgency").then(resp => {
      this.props.history.push("/jobConfirm");
    });
  }
  render() {
    return (
      <div id="urgentCheckedContainer">
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio amarillo</h1>
        <p className="UrgentCheckedText">
          Estos anuncios se mantienen arriba en la lista por 2 dias y los ven
          muchas mas personas. <br />
          <br /> Los anuncios amarillos tienen un costo de 10$. Desea pagar
          ahora? <br />
          <br />
        </p>
        <button onClick={this.wantsToPay} className="UrgentCheckedButton">
          Si
        </button>
        <button onClick={this.doesNotWantToPay} className="UrgentCheckedButton">
          No
        </button>
        <p className="UrgentCheckedText">
          Si marca No su anuncio sera gratis y celeste como el resto.
        </p>
      </div>
    );
  }
}
