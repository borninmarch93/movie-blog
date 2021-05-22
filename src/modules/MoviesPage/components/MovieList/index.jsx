import Grid from "../../../../components/Grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../../../services";

const MovieList = ({ category }) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        setMovies(await fetchMovies());
    }, []);

    const filterByCategory = (movie) => {
        if (!category) return true;
        if (category === 'all') {
            return movies;
        }
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