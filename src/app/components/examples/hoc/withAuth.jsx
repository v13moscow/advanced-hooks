import React, { useState } from "react";
import CardWrapper from "../../common/Card";

function withAuth(Component) {
    return function (props) {
        const [isAuth, setIsAuth] = useState();

        const handleLogin = () => {
            localStorage.setItem("user", "isLogin");
            setIsAuth(true);
        };

        const handleLogout = () => {
            localStorage.removeItem("user");
            setIsAuth(false);
        };

        return (
            <CardWrapper>
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogout={() => handleLogout}
                    onLogin={() => handleLogin}
                />
            </CardWrapper>
        );
    };
}

export default withAuth;
