import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {  

    render() {
    const ownReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)

    return (
      <ul>
        {ownReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;