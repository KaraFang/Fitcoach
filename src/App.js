import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import logo from './logo.svg';
import Home from './pages/Home';
import Workout from './pages/Workout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout/:id" element={<Workout />} />
        </Routes>
        <Footer />
    </Box>
  );
}

export default App;
