import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    return(
      <ul>
        {this.props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} delete={this.props.delete} />)}
      </ul>
    );
  }
};

export default Restaurants;