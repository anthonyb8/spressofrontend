import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
        // Additional logout logic (like redirecting) can be added here
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
