import withLayout from "../../components/Layout/withLayout";
import Grid from "../../components/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Button from "../../components/Button";

const MoviePage = ({match}) => {
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(false);

    useEffect(async () => {
        const movieId = match.params.movieId;
        const response = await fetchMovie(movieId);
        const commentsResponse = await fetchMovieComments(movieId);
        setMovie(response);
        setComments(commentsResponse);
    }, [])

    const fetchMovie = async (movieId) => {
        const moviesResponse = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}`);
        return moviesResponse.data;
    }

    const fetchMovieComments = async (movieId) => {
        const moviesResponse = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}/comments`);
        return moviesResponse.data;
    }

    const formatDate = (date) => {
        return moment(date).format('MMM DD, YYYY')
    }

    return (
        <Grid row={true} className="container blog">
            <Grid row={true} className="movie-page">
                <Grid column={true} lg={3}>
                    <div className="movie">
                        <img alt="movie" src={movie.imageUrl}/>
                    </div>
                </Grid>
                <Grid column={true} lg={7} className="movie__description">
                    <h2>{movie.name}</h2>
                    <p>{movie.description}</p>
                    <div className="comments">
                        <h3>{comments.length} Comments</h3>
                        <div>
                            {comments.map(comment => {
                                return (
                                    <div key={comment.id} className="comment">
                                        <span className="comment__date">{formatDate(comment.createdAt)}</span>
                                        <p className="comment__text">{comment.text}</p>
                                    </div>
                                )
                            })}
                            <textarea className="textarea" placeholder="Comment"/>
                            <Button
                                variant="primary"
                                shape="round">Add comment
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withLayout(MoviePage);