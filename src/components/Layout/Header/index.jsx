import Grid from "../../Grid";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../Auth/LoginButton";
import LogoutButton from "../../Auth/LogoutButton";
import { Link } from "react-router-dom";

const Header = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Grid row={true} className="header">
            <Grid column={true} lg={2} className="header__logo">
                <Link to="/"><h1>Mov.</h1></Link>
            </Grid>
            <Grid column={true} lg={10} className="btn--login">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Grid>
        </Grid>
    )
}

export default Header;