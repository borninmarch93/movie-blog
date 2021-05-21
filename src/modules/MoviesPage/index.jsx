import withLayout from "../../components/Layout/withLayout";
import Grid from "../../components/Grid";
import Categories from "./components/Categories";
import MovieList from "./components/MovieList";
import { useState } from "react";

const MoviesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState();

    return (
        <Grid row={true} className="container blog">
            <Grid row={true} className="blog__title">
                <h2>Movie Collection</h2>
            </Grid>
            <Categories onSelect={setSelectedCategory} />
            <MovieList category={selectedCategory} />
        </Grid>
    )
}

export default withLayout(MoviesPage);