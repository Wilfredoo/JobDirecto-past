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
        <h1 id="UrgentCheckedTitle">Usted a marcado anuncio urgente</h1>
        <img id="urgentExample" src="urgentExample3.png" />
        <p className="UrgentCheckedText">
          Los anuncios urgentes son de color amarillo y se mantienen arriba en
          la lista por 48 horas. <br />
          <br /> Los anuncios urgentes tienen un costo de 10$. <br />
          <br />
          Desea comprar uno? <br />
          <br />
        </p>
        <button onClick={this.wantsToPay} id="UrgentCheckedButtonYES">
          SI <br /> (quiero pagar 10$ por un anuncio amarillo)
        </button>
        <button onClick={this.doesNotWantToPay} id="UrgentCheckedButtonNO">
          NO <br /> (quiero un anuncio gratis y normal)
        </button>
      </div>
    );
  }
}