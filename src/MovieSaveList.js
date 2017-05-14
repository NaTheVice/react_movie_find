import React, { Component } from 'react';

class MovieSaveList extends Component {

saveList(){
    var textFile = null;
    window.URL.revokeObjectURL(textFile);
    var txt = [];
    for (var i = 0; i < this.props.list.length; i++) {
    txt.push(this.props.list[i].Title) 
    }
    var data = new Blob(txt, {type: 'text/plain'});
    textFile = window.URL.createObjectURL(data);
    document.getElementById("downloadlink").className = "";
    var link = document.getElementById('downloadlink');
    link.href = textFile;


}


render() {
            return (     
            <div>
                <div className='row liste' >
                        <br />
                        <div className='listheader'>
                        <h4>Your Movies: </h4>
                        
                        </div>
                            {this.props.list.map((movie, i)=>{
                            return <div key={i} className='col-md-1 list_infos'>
                                        
                                        <div id='listcover' className='cover listcover'>
                                        <img className='img-rounded img-responsive ' alt='Filmcover' src={movie.Poster} />
                                        </div>
                                        
                                        <hr />
                                    </div>                   
                            })}
                </div>
                <div className='col-md-12 file'>
                    <a download="mymovielist.txt" id="downloadlink" className='hidden'>Download list</a>
                    <br />
                    <button onClick={() => this.saveList()} className='btn btn-success' >Create file</button> 
                    <br />
                    
                </div>
            </div>
                );
        

    }

}
export default MovieSaveList;