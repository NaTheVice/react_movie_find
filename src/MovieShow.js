import React, { Component } from 'react';
import MovieDetails from './MovieDetails'


class MovieShow extends Component {

    constructor(props){
            super(props);
            this.deleteMovie = this.deleteMovie.bind(this);
            this.handleSelection = this.handleSelection.bind(this);
            this.handleBack = this.handleBack.bind(this);
            this.handleAdd = this.handleAdd.bind(this);
            this.state =
            {movies: this.props.movie.Search,
            selected: "",
            pos: "",
            list:""
            };
        }   


deleteMovie(id ) {
    this.props.getplot();
    this.setState({selected: ""});
    var array = this.state.movies;
    array.splice(id,1); 
    this.setState({movies: array});
}

handleSelection(id, title ) {

    this.props.getplot(title);
    document.getElementById("back").className = "btn btn-info";
    document.getElementById("ersteSpalte").className = "col-md-4";
    document.getElementById("zweiteSpalte").className = "col-md-4";
    document.getElementById("proFilmSpalte").className = "col-md-12";
    document.getElementById("moviename").className = "row";
    document.getElementById("cover").className = "cover";
    var array = this.state.movies;
    if (array.length > 1){
    this.setState({selected: ""});
    this.setState({pos: id});
    var selection = array.splice(id,1)
    this.setState({movies: selection});
    }
    this.setState({selected: selection[0]});
}

handleBack(){
    document.getElementById("back").className = "btn btn-info hidden";
    document.getElementById("ersteSpalte").className = "hidden";
    document.getElementById("zweiteSpalte").className = "";
    document.getElementById("moviename").className = "row moviename";
    document.getElementById("cover").className = "cover coverlist";
    document.getElementById("proFilmSpalte").className = "col-md-2 filmspalte";
        this.props.movie.Search.splice(this.state.pos,0,this.state.selected)
        this.setState({selected: ""});
        this.setState({movies: this.props.movie.Search});
 
}

handleAdd(movie){
    
    if(this.state.list === ""){
    var liste = [];
    liste.push(movie);
    this.setState({list: liste});
    this.props.changeparentlist(liste);
    }
    if(this.state.list.length > 0){
    var array = this.state.list;
    array.push(movie);
    this.setState({list: array });
    this.props.changeparentlist(array);
    }
    
}


render() {
        let movieDetails = null;
        
        let moviePlot = null;
        //console.log(this.state);
        if(this.state.selected !==""){
                movieDetails = <MovieDetails movie={this.state.selected} handleAdd={this.handleAdd.bind(this)}  />;
                
            }

        if(this.props.plot!==""){
                moviePlot= <div id='movieplot'><br /><h4>About:</h4><p>{this.props.plot}</p></div>
        }

        return (     
                <div>  
                    <div id='ersteSpalte' className=''>{moviePlot}</div>
                    <div id='zweiteSpalte' className=''>
                        {this.state.movies.map((movie, i)=>{
                        return <div id='proFilmSpalte' key={i} className='col-md-2 filmspalte'>

                                    <div id='moviename' className='row moviename'>
                                        <p>{movie.Title}</p>
                                    </div>

                                    <div id='cover' className='cover coverlist'>
                                        <img className='img-rounded img-responsive center-block' alt='Filmcover' src={movie.Poster} />
                                    </div>
                   
                                    <button onClick={() => this.handleBack(i)} type="button" className='btn btn-info hidden' id='back'> Back </button>
                                    <button onClick={() => this.deleteMovie(i)} type="button" className='btn btn-warning'> Delete </button>
                                    <button onClick={() => this.handleSelection(i,movie.Title)} type="button"  className='btn btn-info'> Details </button>

                                </div>                        
                                })}     
                    </div>
                    <div id='dritteSpalte' className='col-md-4'>{movieDetails}</div>       
                </div>
        );
    }
}

export default MovieShow;
