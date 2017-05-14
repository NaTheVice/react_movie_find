class fakeAPI {
    movies = [
        {"Title":"Arrival","Year":"2016","Rated":"PG-13","Released":"11 Nov 2016","Runtime":"116 min","Genre":"Drama, Mystery, Sci-Fi","Director":"Denis Villeneuve","Writer":"Eric Heisserer (screenplay), Ted Chiang (based on the story \"Story of Your Life\" written by)","Actors":"Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg","Plot":"When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.","Language":"English, Russian, Mandarin","Country":"USA","Awards":"Won 1 Oscar. Another 45 wins & 224 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"8.0","imdbVotes":"316,658","imdbID":"tt2543164","Type":"movie","DVD":"14 Feb 2017","BoxOffice":"$100,501,349.00","Production":"21 Laps Entertainment","Website":"http://www.arrivalmovie.com/","Response":"True"},
        {"Title":"Contact","Year":"1997","Rated":"PG","Released":"11 Jul 1997","Runtime":"150 min","Genre":"Drama, Mystery, Sci-Fi","Director":"Robert Zemeckis","Writer":"James V. Hart (screenplay), Michael Goldenberg (screenplay), Carl Sagan (based on the novel by), Carl Sagan (based on the story by), Ann Druyan (based on the story by)","Actors":"Jena Malone, David Morse, Jodie Foster, Geoffrey Blake","Plot":"Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of intelligent aliens, who send plans for a mysterious machine.","Language":"English, Spanish, German, Russian","Country":"USA","Awards":"Nominated for 1 Oscar. Another 14 wins & 26 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWNkYmFiZjUtYmI3Ni00NzIwLTkxZjktN2ZkMjdhMzlkMDc3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"62%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.4","imdbVotes":"211,231","imdbID":"tt0118884","Type":"movie","DVD":"16 Dec 1997","BoxOffice":"N/A","Production":"Warner Home Video","Website":"N/A","Response":"True"}
    ];

    getMovie(search){
        //let movie;
        for (let m in this.movies){
            if (m.Title === search){
                return m;
            }
        }
    }
}