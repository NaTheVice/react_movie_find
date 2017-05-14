import React, { Component } from 'react';

class MovieDetails extends Component {

    constructor(props) {
        super(props);

        this.getMovieDetailsFromAPI = this.getMovieDetailsFromAPI.bind(this);
        //this.getMovieFromFakeAPI = this.getMovieFromFakeAPI.bind(this);
        this.state = {
            search: this.props.movie.Title,
            details: "",
           
        };
        this.getMovieDetailsFromAPI();
    
    }

getMovieDetailsFromAPI() {

        //this.setState({details: ""});
        return fetch('http://www.omdbapi.com/?t=' + this.state.search)
            .then((response) => response.json())
            .then((response) =>  {  
                console.log('movie dtails from api:' + response.Title)
                this.setState({details:response});
                //console.log(this.state);
            })
           
    }



handleAdd(){
  this.props.handleAdd(this.props.movie);
}

render() {
       
            return (
                <div className='details'>
                    <br />
                    <h4>Details:</h4>
                    <p>Title: {this.state.details.Title}</p>
                    <p>Writer: {this.state.details.Writer}</p>
                    <p>Year: {this.state.details.Year}</p>
                    <p>Genre: {this.state.details.Genre}</p>
                    <p>Country: {this.state.details.Country}</p>
                    <p>Language: {this.state.details.Language}</p>
                    <p>Runtime: {this.state.details.Runtime}</p>
                    <p>Actors: {this.state.details.Actors}</p>
                    <p>imdbRating: {this.state.details.imdbRating}</p>
                    <br />
                    <button onClick={() => this.handleAdd()} type="button" className='btn btn-primary'> Add to list </button>
                    <br />
                  

                </div>
                );
        

    }

}
export default MovieDetails;