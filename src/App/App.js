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

  addReservation = reservation => {
    this.setState({reservations: [...this.state.reservations, reservation]});
    fetch('http://localhost:3001/api/v1/reservations', {
      method: "POST", 
      body: JSON.stringify({
        id: reservation.id,
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: reservation.number
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(response => {
      if(!response.ok) {
        return "Error occurred"
      }
      return response.json()
    })
    .then(data => console.log("New Reservation Made"))
    .catch(error => console.log(error.message))
  }

  deleteReservation = event => {
    fetch(`http://localhost:3001/api/v1/reservations/${event.target.parentNode.id}`, {
      method: "DELETE"
    })
    .then(response => {
      if(!response.ok) {
        return "Error occurred"
      }
      return response.json()
    })
    .then(data => this.setState({reservations: data}))
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addRes={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations res={this.state.reservations} deleteRes={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
