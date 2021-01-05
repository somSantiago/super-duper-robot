import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuario:"<usuario>",}
  }
  render() {
    return (
      <div className="contentForm ">
        <h3> Bienvenido</h3>
        <h4>Sr {this.state.usuario}</h4>
      </div>
    );
  } 
}
  