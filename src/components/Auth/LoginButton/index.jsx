import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../Button";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button
        id="loginButton"
        shape="round"
        variant="secondary"
        onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;