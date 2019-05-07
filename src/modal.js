import React from "react";
import axios from "axios";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("/getJobDetails/" + this.props.id).then(result => {
      this.setState({
        jobData: result.data
      });
    });
  }

  render() {
    if (!this.state.jobData) {
      return null;
    }
    return (
      <div>
        <main className="modal">
          <table id="jobDetails">
            <tr>
              <td className="jobDetailsText">Restaurante:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.restname}
              </td>
              <button onClick={this.props.close} class="btn">
                <i class="fa fa-close" />
              </button>
            </tr>
            {this.state.jobData.data.jobtype !== "Otro" && (
              <tr>
                <td className="jobDetailsText">Puesto:</td>
                <td className="jobDetailsText">
                  {this.state.jobData.data.jobtype}
                </td>
              </tr>
            )}
            {this.state.jobData.data.jobtype === "Otro" && (
              <tr>
                <td className="jobDetailsText">Puesto:</td>
                <td className="jobDetailsText">
                  {this.state.jobData.data.otro_desc}
                </td>
              </tr>
            )}
            <tr>
              <td className="jobDetailsText">Salario:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.hourpay}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">Paga en:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.typepay}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">Horario:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.schedule}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">Direccion:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.address}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">Area:</td>
              <td className="jobDetailsText">{this.state.jobData.data.area}</td>
            </tr>
            <tr>
              <td className="jobDetailsText">Numero:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.phone}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">Preguntar por:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.contact}
              </td>
            </tr>
            <tr>
              <td className="jobDetailsText">Mas informacion:</td>
              <td className="jobDetailsText">
                {this.state.jobData.data.extrainfo}
              </td>
            </tr>
          </table>
        </main>
      </div>
    );
  }
}
