import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{

  state = {
    reviews: [],
    searchTerm: ""
  }
  handleClick = (event) => {
    event.preventDefault()
    fetch(URL+`&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(info => {
      this.setState({
        reviews: info.results
      })
    })
  }
  handleChange = (event) => {

    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button type="submit" onClick={this.handleClick}>submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
