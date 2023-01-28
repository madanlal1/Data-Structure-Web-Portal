import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class Ratings extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    localStorage.setItem("rating", nextValue);
  }
 
  render() {
    const { rating } = this.state;
    // console.log(rating);
    return (                
      <div style={{fontSize: 24}}>
        <label style={{fontSize: 20}}>Rating</label><br/> 
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}