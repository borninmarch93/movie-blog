import Grid from "../../Grid";

const Header = () => {
    return (
        <Grid row={true} className="header">
            <Grid column={true} lg={2} className="header__logo">
                <h1>Mov.</h1>
            </Grid>
        </Grid>
    )
}

export default Header;