import { useState } from "react";

export const LoginForm = ({ title, onSubmit }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const submit = (e) => {
        e.preventDefault();
        onSubmit(email, pwd);
        console.log(email, pwd);
    };

    return (
        <form onSubmit={submit}>
            <p>{title}</p>
            <label>email</label>
            <input onChange={(e) => setEmail(e.target.value)} />
            <label>pwd</label>
            <input type="password" onChange={(e) => setPwd(e.target.value)} />
            <button>Login</button>
        </form>
    );
};
