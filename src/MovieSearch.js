import React, { Component } from 'react';
import './App.css';
//import {fakeAPI} from './fakeAPI';
import MovieShow from './MovieShow';
import MovieSaveList from './MovieSaveList'


class MovieSearch extends Component     {
    constructor(props) {
        super(props);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        
        this.getMovieFromAPI = this.getMovieFromAPI.bind(this);
        //this.getMovieFromFakeAPI = this.getMovieFromFakeAPI.bind(this);
        this.state = {
            search: "",
            result: "",
            list: "",
            plot:"",
       
        };
    }

    handleChangeList(list) {
        console.log('change list in search component!!')
        console.log('länge übergeben:' +list.length);
         console.log('länge state:' +this.state.list.length);
        if(this.state.list===""){
        this.setState({
            list: list
        });
        }
        if (this.state.list.length >0){ 
            console.log('change list > 0')
            var isIn=0;
            var movie = list.pop();
            var array = this.state.list;
            for(var i =0; i<array.length;i++){
                if (array[i].Title.match(movie.Title))
                isIn++;
            }
            if(isIn===0){
            array.push(movie);
            this.setState({
                list: array
            })
            }
        }
    }

    getList(){
        return this.state.list;
    }

    handleChangeSearch(e) {
    
        this.setState({search: e.target.value});
        console.log('searchstring: ' + this.state.search);
    }

    //debugger;

    getMovieFromAPI() {

        this.setState({result: ""});
        this.setState({plot: ""});               
        return fetch('http://www.omdbapi.com/?s=' + this.state.search)
            .then((response) => response.json())
            .then((response) =>  {
                
                console.log('api answer: ' + response)
                this.setState({result:response});
              
               
            })
           
    }

    getMoviePlotFromAPI(title) {

        
        if(title===undefined){
            this.setState({plot:""});
        }
        if(title!==undefined){
        return fetch('http://www.omdbapi.com/?t='+title+'&plot=full')
            .then((response) => response.json())
            .then((response) =>  {  
                //console.log('movie plot from api:' + response.Plot)
                this.setState({plot:response.Plot});
                //console.log(this.state);
            })
        }
    }

  


    render() {
        let movieShow=null;
        let movieSaveList=null;
        if(this.state.list !== ""){
        movieSaveList = <MovieSaveList list={this.state.list} />;
        }
        //console.log(this.state);
        if(this.state.result !== ""){
                movieShow = <MovieShow movie={this.state.result} plot={this.state.plot} getplot={this.getMoviePlotFromAPI.bind(this)} changeparentlist={this.handleChangeList.bind(this)}  />;
                
                }

        return (
            <div className='container' >
                <input className='whiteinput' type="text" placeholder='Type name of the movie' onKeyUp={this.handleChangeSearch}></input>
                <button className='btn btn-primary' onClick={this.getMovieFromAPI}>FIND</button>
                <br />
                <br />
                        {movieShow}    
                <div className='col-md-12'>
                <footer>
                        {movieSaveList}
                </footer>
                </div>
            </div>);


    }
}
export default MovieSearch;