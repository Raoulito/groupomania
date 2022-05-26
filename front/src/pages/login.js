import { LoginForm } from "../components/login/login-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const onSubmit = (email, pwd) => {
        //API call + res
        localStorage.setItem("isLogged", 'LOGGEDIN')
        navigate("/");
    };
    const title = "Page de login";
    return <LoginForm title={title} onSubmit={onSubmit} />;
};
