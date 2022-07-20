import React, { Component } from 'react';
import './Form.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '', 
      date: '', 
      time: '', 
      number: null
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }


  submitReservation = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.addRes(newRes);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name:'', date:'', time: '', number: null});   // At this point, the number of guests is not resetting to null.
  }

  render = () => {
    return (
      <form>
        <input 
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event=> this.handleChange(event)}
        />
        <input 
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={event=> this.handleChange(event)}
        />
        <input 
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={event=> this.handleChange(event)}
        />
        <input 
          type="number"
          placeholder="Number of Guests"
          name="number"
          value={this.state.number}
          onChange={event=> this.handleChange(event)}
        />
        <button onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}


export default ReservationForm;