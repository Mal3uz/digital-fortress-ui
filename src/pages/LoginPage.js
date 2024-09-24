import React, { useState } from 'react';
import '../styles/LoginPage.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        //TODO: logic  login
        console.log('Logging in with', email, password);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2><span className="text-white">Hello, </span> <span className="linear-text-gradient">Digital Fortress</span></h2>
                <p>Log in to the platform to start creating magic.</p>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <div className="mail-icon icon"></div>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-wrapper">
                    <div className="pass-icon icon"></div>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                        />
                    </div>
                    <div className="login-options">
                        <label>
                            <input type="checkbox" /> <span>Remember me</span>
                        </label>
                        <a href="./" className="text-gradient-green">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <div className="signup-link">
                    Don’t have an account? <a href="/signup">Sign Up</a>
                </div>
            </div>
            <div className="login-info">
                <blockquote>
                    <p>Digital Fortress has been a game-changer for our content creation process. The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.</p>
                    <p className="person-name">Lily Allisson </p>
                    <p className="person-detail">CMO at Digital Fortress</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Login;
