import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {
  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that returns 5 Star components
  render_stars() {
    const maxRating = 5;
    let stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Star
          key={i}
          isSelected={i <= this.state.rating}
          setRating={() => this.handleSetRating(i)}
        />
      );
    }
    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  handleSetRating = (rating) => {
    // if the star of the current rating is clicked, reset rating to 0
    this.setState(prevState => ({
      rating: rating == prevState.rating ? 0 : rating
    }));
  }

  render() {
    return (
      <ul className="course--stars">
        { this.render_stars() }
      </ul>
    );
  }
}

export default StarRating;
