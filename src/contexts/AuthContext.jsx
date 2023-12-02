import React, { createContext, useState } from 'react';
import api from '../services/apiservice';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    // Function to log in the user
    const login = async (username, password) => {
        try {
            const response = await api.post('/account/login/', {
                username,
                password
            });
            const token = response.data.token;
            setAuthToken(token);
            localStorage.setItem('token', token); // Save token to localStorage
        } catch (error) {
            console.error("Login error", error);
        }
    };

    // Function to log out the user
    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token'); // Remove token from localStorage
    };

    // Function to check token on initial load
    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
        }
    };

    // Check auth token on initial load
    React.useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};