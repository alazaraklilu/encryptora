import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from './components/auth/login';
import Register from './components/auth/register';

const theme = createTheme({

    palette: {
        primary: {
            main: "#1a73e8",
        },
        background: {
            default: "#f4f6f8",
        }
    }
});


const App = () => {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<h1>Welcome to the App</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;