import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();
    const onclick = () => {
        localStorage.removeItem("isLogged")
        navigate("/login")
    }
    return <button onClick={onclick}>Log out</button>
}