import Header from "./Header";

const withLayout = Component  => {
    return (props) => {
        return (
            <div className="main-container">
                <Header/>
                <Component {...props} />
            </div>
        )
    }
}

export default withLayout;