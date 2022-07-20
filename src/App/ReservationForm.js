import React, { Component } from 'react';
import './Form.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '', 
      data: '', 
      time: '', 
      number: null
    }
  }

  render = () => {
    return (
      <form>
        <input 
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
        />
        <input 
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
        />
        <input 
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
        />
        <input 
          type="number"
          placeholder="Number of Guests"
          name="number"
          value={this.state.number}
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}


export default ReservationForm;