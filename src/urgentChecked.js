import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class UrgentChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // if urgent is not checked, then do this
    event.preventDefault();
    console.log("state in urgentChecked: ", this.state);

    axios.post("/finalizeJob", this.state).then(resp => {
      this.props.history.push("/urgentChecked2");
      if (resp.data.success) {
      }
    });
    // if urgent is checked, then redirecto to new component
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
        <button onClick={this.handleSubmit} className="UrgentCheckedButton">
          Si
        </button>
        <button className="UrgentCheckedButton">No</button>
        <p className="UrgentCheckedText">
          Si marca No su anuncio sera gratis y celeste como el resto.
        </p>
      </div>
    );
  }
}
