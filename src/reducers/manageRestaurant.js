import { combineReducers } from 'redux';
import cuid from 'cuid';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer;

function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      console.log(action)
      const rest = {
        id: cuid(),
        text: action.restaurant
      }
      return [...state, rest]
    case "DELETE_RESTAURANT":
      const restaurants = state.filter(r => r.id !== action.id)
      return restaurants
    default:
      return state
  }
}

function manageReviews(state = [], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const review = { 
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return [...state, review]
    case "DELETE_REVIEW":
      const reviews = state.filter(r => r.id !== action.id)
      return reviews
    default:
      return state
  }
}
