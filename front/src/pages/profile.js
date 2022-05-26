import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authGuard } from "../services/auth-guard";
import { UserProfile } from "../components/profile/user-profile";

export const Profile = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        authGuard(navigate);
        setLoading(false);
    }, []);

    return <>{!loading && <UserProfile />}</>;
};
