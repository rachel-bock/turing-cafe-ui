import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations';
import ReservationForm from './ReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => {
        if(!response.ok) {
          return "Something went wrong with the fetch"
        }
        return response.json();
      })
      .then(data => this.setState({reservations: data}))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm />
        </div>
        <div className='resy-container'>
          <Reservations res={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
