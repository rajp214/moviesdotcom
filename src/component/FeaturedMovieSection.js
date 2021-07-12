import React,{useEffect,useState} from 'react'
import './FeaturedMovieSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FeaturedMovieSection() {
const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/featuredMovie")
      .then(res => res.json())
        .then(response => setMovies(response));
    }, []);

    const imgRender = (movie) =>{
      <img className="" key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
    };
    return (
      <div>
          <div className="featuredMovieTitle">Featured Movies</div>
          <div className="FeaturedMovies">
              {movies.map((movie) =>
                <img className="" key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
              )}
          </div>
      </div>
    )
};
    

export default FeaturedMovieSection;
