import React, { useState } from 'react';
import api from '../services/apiservice';

const RegisterUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Assuming email is required

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/account/register/', {
                username,
                password,
                email
            });
            if (response.status === 201) {
                console.log("Registration successful", response.data);
                // You might want to redirect the user to the login page after successful registration
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegistration}>
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
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterUser;
