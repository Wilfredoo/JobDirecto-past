import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeUrgent = this.makeUrgent.bind(this);
  }

  componentDidMount() {
    axios.get("/jobform");

    axios.get("/getJobforCorrect").then(result => {
      this.setState({
        jobData: result.data,
        restname: result.data.data.restname,
        jobtype: result.data.data.jobtype,
        typepay: result.data.data.typepay,
        area: result.data.data.area,
        hourpay: result.data.data.hourpay,
        schedule: result.data.data.schedule,
        address: result.data.data.address,
        phone: result.data.data.phone,
        contact: result.data.data.contact,
        extrainfo: result.data.data.extrainfo,
        urgent: result.data.data.urgent
      });
    });
  }

  makeUrgent() {
    this.setState({ addClass: !this.state.addClass });
    // addClass backgroundColor yellow to .jobForm
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("state in job form: ", this.state);
    axios.post("/finalizeJob", this.state).then(resp => {
      if (this.state.urgent === "true") {
        this.props.history.push("/urgentChecked");
      } else {
        this.props.history.push("/JobConfirm");
      }
    });
  }

  render() {
    let jobFormClass = ["jobForm"];
    if (this.state.addClass) {
      jobFormClass.push("yellow");
    }
    return (
      <div className={jobFormClass.join(" ")}>
        <form onSubmit={this.handleSubmit}>
          <h1>Crear Nuevo Puesto</h1>
          <p className="formQuestions">
            Como se llama su restaurante o empresa?
          </p>
          <input
            className="formInputs"
            type="text"
            name="restname"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.restname
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          <p className="formQuestions">Que posicion busca?</p>
          <input
            className="formInputs"
            type="text"
            name="jobtype"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.jobtype
                : ""
            }
            required="required"
            onChange={this.handleChange}
          />
          {this.state.jobtype === "Otro" && (
            <div>
              <p className="formQuestions" style={{ color: "blue" }}>
                <b>Que busca?</b>
              </p>
              <input
                autoFocus
                className="formInputs"
                type="text"
                name="otro"
                required="required"
                onChange={this.handleChange}
              />
            </div>
          )}
          <p className="formQuestions">Cuanto paga?</p>
          <input
            className="formInputs"
            type="text"
            name="hourpay"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.hourpay
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Paga en cheque o cash?</p>
          {this.state.jobData &&
            this.state.jobData.data &&
            this.state.jobData.data.typepay === "cash" && (
              <label htmlFor="cash">
                Cash
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cash"
                    defaultChecked="defaultChecked"
                    onChange={this.handleChange}
                  />
                </span>
                Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cheque"
                    onChange={this.handleChange}
                  />
                </span>
                Cash y Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="Cash y Cheque"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            )}
          {(this.state.jobData &&
            this.state.jobData.data &&
            this.state.jobData.data.typepay !== "cash") ||
            (!this.state.jobData && (
              <label htmlFor="cash">
                Cash
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cash"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            ))}
          {this.state.jobData &&
            this.state.jobData.data &&
            this.state.jobData.data.typepay === "cheque" && (
              <label htmlFor="cash">
                Cash
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cash"
                    onChange={this.handleChange}
                  />
                </span>
                Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cheque"
                    defaultChecked="defaultChecked"
                    onChange={this.handleChange}
                  />
                </span>
                Cash y Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="Cash y Cheque"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            )}
          {(this.state.jobData &&
            this.state.jobData.data &&
            this.state.jobData.data.typepay !== "cheque") ||
            (!this.state.jobData && (
              <label htmlFor="cheque">
                Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cheque"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            ))}
          {this.state.jobData &&
            this.state.jobData.data &&
            this.state.jobData.data.typepay === "Cash y Cheque" && (
              <label htmlFor="cash">
                Cash
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cash"
                    onChange={this.handleChange}
                  />
                </span>
                Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="cheque"
                    onChange={this.handleChange}
                  />
                </span>
                Cash y Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="Cash y Cheque"
                    defaultChecked="defaultChecked"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            )}
          {(this.state.jobData &&
            this.state.jobData.data &&
            this.state.jobData.data.typepay !== "Cash y Cheque") ||
            (!this.state.jobData && (
              <label htmlFor="Cash y Cheque">
                Cash y Cheque
                <span>
                  <input
                    className="radio"
                    type="radio"
                    name="typepay"
                    value="Cash y Cheque"
                    onChange={this.handleChange}
                  />
                </span>
              </label>
            ))}
          <p className="formQuestions"> Cual es el horario?</p>
          <input
            className="formInputs"
            type="text"
            name="schedule"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.schedule
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Direccion del local:</p>
          <input
            className="formInputs"
            type="text"
            name="address"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.address
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">En que area se encuentra?</p>
          <select
            className="formInputs"
            type="text"
            name="area"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.area
                : ""
            }
            required="required"
            onChange={this.handleChange}
          >
            <option value="" />
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Manhattan"
              }
              value="Manhattan"
            >
              Manhattan
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Brooklyn"
              }
              value="Brooklyn"
            >
              Brooklyn
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "El Bronx"
              }
              value="El Bronx"
            >
              El Bronx
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Queens"
              }
              value="Queens"
            >
              Queens
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Staten Island"
              }
              value="Staten Island"
            >
              Staten Island
            </option>
            <option
              selected={
                this.state.jobData &&
                this.state.jobData.data &&
                this.state.jobData.data.area == "Otra area en NY"
              }
              value="Otra area en NY"
            >
              Otra area en NY
            </option>
          </select>
          <p className="formQuestions">Numero de celular? (opcional)</p>
          <input
            className="formInputs"
            type="text"
            name="phone"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.phone
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Por quien preguntar?</p>
          <input
            className="formInputs"
            type="text"
            name="contact"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.contact
                : ""
            }
            onChange={this.handleChange}
          />
          <p className="formQuestions">Algo que desee agregar?</p>
          <input
            className="formInputs"
            type="text"
            name="extrainfo"
            defaultValue={
              this.state.jobData && this.state.jobData.data
                ? this.state.jobData.data.extrainfo
                : ""
            }
            onChange={this.handleChange}
          />
          <br />
          {/*
          <p className="formQuestions">
            Desea que su anuncio sea TOP (amarillo y urgente)?
          </p>{" "}
          <div id="yesAndCheckbox">
            <label id="si" htmlFor="urgentCheckBox">
              Si
            </label>
            <input
              id="urgentCheckBox"
              type="checkbox"
              name="urgent"
              defaultValue={
                this.state.jobData && this.state.jobData.data
                  ? this.state.jobData.data.urgent
                  : true
              }
              onChange={this.handleChange}
              onClick={this.makeUrgent}
            />
          </div>{" "}*/}
          <br />
          <br />
          <br />
          <input
            id="listo"
            onClick={this.submission}
            type="submit"
            value="Listo"
          />
        </form>
      </div>
    );
  }
}
