// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar';
import LoginUser from './components/LoginUser';
import Logout from './components/Logout';
import RegisterUser from './components/RegisterUser';
import FeedPage from './pages/FeedPage';
import ContributionPage from './pages/ContributionPage';
import ShopPage from './pages/ShopPage';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/login" element={<LoginUser />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/feed" element={<ProtectedRoute> <FeedPage /> </ProtectedRoute>} />
                    <Route path="/contribute" element={<ProtectedRoute> <ContributionPage /> </ProtectedRoute>} />
                    <Route path="/shop/:shopId" element={<ProtectedRoute> <ShopPage /> </ProtectedRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
