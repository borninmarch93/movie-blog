import withLayout from "../../components/Layout/withLayout";
import Grid from "../../components/Grid";
import Categories from "./components/Categories";
import MovieList from "./components/Movie";

const MoviesPage = () => {
    return (
        <Grid row={true} className="container blog">
            <Grid row={true} className="blog__title">
                <h2>Movie Collection</h2>
            </Grid>
            <Categories />
            <MovieList />
        </Grid>
    )
}

export default withLayout(MoviesPage);