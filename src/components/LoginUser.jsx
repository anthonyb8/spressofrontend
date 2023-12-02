// LoginUser.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FormLayout from './FormLayout';

const LoginUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <FormLayout title="Login">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </FormLayout>
    );
};

export default LoginUser;
