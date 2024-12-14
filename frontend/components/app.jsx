import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Homepage from './homepage';
import AuthPage from './auth/authPage';

// const theme = createTheme({

//     palette: {
//         primary: {
//             main: "#1a73e8",
//         },
//         background: {
//             default: "#f4f6f8",
//         }
//     }
// });


const App = () => {
    return (
        // <ThemeProvider>
        //     <CssBaseline />
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </Router>
        // </ThemeProvider>
    );
};

export default App;