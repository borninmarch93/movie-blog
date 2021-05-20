import Grid from "../../../../components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        const response = await getMovies();
        setMovies(response);
    }, []);

    const getMovies = async () => {
        const moviesResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies');
        return moviesResponse.data;
    }

    return (
        <Grid row={true} className="blog__posts">
            {movies.map(movie => {
                return (
                    <Grid className="movie__container" column={true} lg={3}>
                        <div className="movie">
                            <a href="/"><img src={movie.imageUrl} /></a>
                            <h5>{movie.name}</h5>
                            <p>{movie.description}</p>
                        </div>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default MovieList;