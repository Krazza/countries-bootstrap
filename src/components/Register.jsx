import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from "react-router-dom";
import { auth, RegisterWithEmailPassword } from "../auth/firebase.js";
import "../styles/Home.css"

function Register()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const register = () => {
        if(!name) alert("Please enter name");
        RegisterWithEmailPassword(name, email, password);
    }

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/");
    }, [user, loading, navigate])

    return(
    <div className="welcomePageContainer">
        <div className="welcomePage">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <Button onClick={register}>{"Register"}</Button>
            <div>
                {"Already have an account?"}
                <Link to="/login">{" Login"}</Link>
            </div>
        </div>
    </div>)
}

export { Register };