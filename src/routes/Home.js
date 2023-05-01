import { useEffect, useState } from "react";
import Movies from "./Movies";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    },[]);
    console.log(movies)
    return(
      <>
        {loading ? <h1>loading</h1> : 
        <div>
          {movies.map(movie => (
            <Movies
              key={movie.id}
              title={movie.title}
              coverImg={movie.large_cover_image}
              summery={movie.description_full} 
            /> 
          ))}
        </div>}
      </>
    )
}

export default Home;