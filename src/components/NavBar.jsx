import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-darkBackground text-white p-4 border-b border-white">
            <nav>
                <ul className="flex justify-between">
                    <li><button onClick={() => navigate('/feed')}>Feed</button></li>
                    <li><button onClick={() => navigate('/contribute')}>Contribute</button></li>
                    <li><button onClick={() => navigate('/login')}>Login</button></li>
                    <li><button onClick={() => navigate('/register')}>Register</button></li>
                    <li><button onClick={() => navigate('/logout')}>Logout</button></li>
                </ul>
            </nav>
        </header>
    );
};
export default NavBar;
