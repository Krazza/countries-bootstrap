import { React, useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase.js";
import { useNavigate } from "react-router-dom";
import { LogInEmailPassword } from "../auth/firebase.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/Home.css"

function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/");
    }, [user, loading, navigate])

    return(
    <div className="welcomePageContainer">
        <div className="welcomePage">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <Button onClick={() => LogInEmailPassword(email, password)}>{"Login"}</Button>
        <div>
            {"Don't have an account?"}
            <Link to="/register">{" Register"}</Link>
        </div>
        </div>
        
    </div>)
}

export { Login };