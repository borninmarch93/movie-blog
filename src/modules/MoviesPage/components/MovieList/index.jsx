import Grid from "../../../../components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = ({ category }) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        const response = await fetchMovies();
        setMovies(response);
    }, []);

    const fetchMovies = async () => {
        const moviesResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies');
        return moviesResponse.data;
    }

    const filterByCategory = (movie) => {
        if (!category) return true;
        return String(movie.categoryId) === category;
    }

    return (
        <Grid row={true} className="blog__posts">
            {movies.filter(filterByCategory).map(movie => {
                return (
                    <Grid key={movie.id} className="movie__container" column={true} lg={3}>
                        <div className="movie">
                            <Link to={`/movies/${movie.id}`}><img alt="movie" src={movie.imageUrl} /></Link>
                            <h5>{movie.name}</h5>
                            <p className="movie__description-overview">{movie.description}</p>
                        </div>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default MovieList;