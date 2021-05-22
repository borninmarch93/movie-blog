import './sass/main.scss';
import MoviesPage from "./modules/MoviesPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from "./modules/Movie";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MoviesPage}/>
                <Route path="/movies/:movieId" component={MoviePage}/>
            </Switch>
        </Router>
    );
}

export default App;
