import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";
import { useEffect, useState } from "react";
import { Logout } from "./components/common/logout";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const location = useLocation();

    useEffect(() => {
      console.log('caca');
        const loginState = localStorage.getItem("isLogged");
        if (loginState !== null) {
            setIsLogged(true);
        }
        else {
          setIsLogged(false)
        }
    }, [location]);

    return (
        <>
            {isLogged === true ? (
                <>
                    <nav>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </nav>
                    <Logout />
                </>
            ) : (
                <></>
            )}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
