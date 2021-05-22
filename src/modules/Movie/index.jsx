import withLayout from "../../components/Layout/withLayout";
import Grid from "../../components/Grid";
import { useEffect, useState } from "react";
import moment from "moment";
import Button from "../../components/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchMovie, fetchMovieComments, fetchMovieTrailer } from "../../services";
import YoutubeTrailer from "../../components/YoutubeTrailer";

const MoviePage = ({match}) => {
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ text: '', textLength: ''});
    const [error, setError] = useState({});
    const [trailer, setTrailer] = useState();

    useEffect(async () => {
        const movieId = match.params.movieId;

        const response = await fetchMovie(movieId);
        const commentsResponse = await fetchMovieComments(movieId);

        setMovie(response);
        setComments(commentsResponse);
    }, []);

    useEffect(async () => {
        if (!movie.imdbId) {
            return;
        }
        const response = await fetchMovieTrailer(movie.imdbId);
        setTrailer(response);
    }, [movie]);

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const formatDate = (date) => {
        return moment(date).format('MMM DD, YYYY')
    }

    const textHandler = (event) => {
        const movieId = match.params.movieId;

        let text = event.target.value;
        let newTextLength = text.length;
        let max = 200;
        let textLeft = max - newTextLength;
        if (newTextLength > max) {
            setError({ ...error, textLength: { message: "You have reached the limit" } });
            return;
        } else {
            setError({ ...error, textLength: null })
        }

        const getCommentId = () => {
            return String(Math.floor((Math.random() * 100) + 1));
        }

        const comment = { ...newComment, text, id: getCommentId(), movieId, createdAt: moment().format(), textLength: textLeft };
        setNewComment(comment);
    }

    const commentHandler = async () => {
        if (!isAuthenticated) {
            await loginWithRedirect();
        }

        // Validations
        if (!newComment.text) {
            setError({ ...error, text: { message: "This field cannot be empty" } });
            return;
        } else if (newComment.text.length <= 1) {
            setError({ ...error, text: { message: "This field has to have more than 1 letter" } })
            return;
        } else {
            setError({ ...error, text: false })
        }

        setComments([...comments, newComment]);
        setNewComment({ ...newComment, text: '', textLength: '200' });
    }

    return (
        <Grid row={true} className="container blog">
            <Grid row={true} className="movie-page">
                <Grid column={true} lg={3} md={3} sm={12}>
                    <div className="movie">
                        <img alt="movie" src={movie.imageUrl}/>
                    </div>
                </Grid>
                <Grid column={true} lg={7} md={7} sm={12} xs={12} className="movie__description">
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
                            <textarea onChange={textHandler}
                                      value={newComment.text}
                                      className="textarea"
                                      placeholder="Comment"/>
                            <div className="comment__msg-field">
                                {error.textLength && <p className="error">{error.textLength.message}</p>}
                                {error.text && <p className="error">{error.text.message}</p>}
                                <p>{newComment.textLength}</p>
                            </div>
                            <Button
                                onClick={commentHandler}
                                variant="primary"
                                shape="round">Add comment
                            </Button>
                        </div>
                        {trailer &&
                            <YoutubeTrailer src={trailer.linkEmbed} />
                        }
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withLayout(MoviePage);