import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state.text)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a restaurant</h1>
          <label htmlFor="name">Restaurant name:</label>
          <input type="text" id="name" name="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    );
  }
};

export default RestaurantInput;
