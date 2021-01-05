import './styles/form.css'
import React from 'react'
//import {Link} from 'react-router-dom';
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', pass:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChangePass(event) {
    this.setState({pass: event.target.value});
    console.log(this.state.pass);
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    window.location.href = '/dashboard';
  }

  render() {
    return (
      <div className="contentForm">
        <h3>INGRESAR</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Pass:
          <input type="password" value={this.state.pass} onChange={this.handleChangePass} />
        </label>
        <input className="buttonLink" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
  