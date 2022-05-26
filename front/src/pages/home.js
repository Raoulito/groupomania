import { useNavigate } from "react-router-dom";
import { Post } from "../components/home/post";
import { useEffect, useState } from "react";
import { authGuard } from "../services/auth-guard";

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        authGuard(navigate);
        setLoading(false);
    }, []);

    return <>{!loading && <Post />}</>;
};
