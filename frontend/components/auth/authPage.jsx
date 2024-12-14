import React, { useState } from 'react';
import {
    Tabs,
    Tab,
    Box,
    TextField,
    Button,
    Typography,
    Container,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const navigate = useNavigate();
    const [tabIndex, setTabIndex] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleTabChange = (_, newValue) => {
        setTabIndex(newValue);
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let endpoint;
        let payload;

        switch (tabIndex) {
            case 0: // User Login
                endpoint = '/api/auth/login';
                payload = {
                    email: formData.email,
                    password: formData.password,
                };
                break;
            case 1: // User Registration
                endpoint = '/api/auth/register';
                payload = {
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                };
                break;
            case 2: // Password Reset
                endpoint = '/api/auth/reset-password';
                payload = {
                    email: formData.email,
                };
                break;
            default:
                return;
        }

        try {
            const response = await axios.post(endpoint, payload);
            alert(response.data.message || 'Success');
            if (tabIndex === 0 && response.status === 200) {
                navigate('/dashboard'); // Redirect on successful login
            }
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('An error occurred. Please try again.');
        }
    };

    const renderForm = () => {
        switch (tabIndex) {
            case 0: // Login Form
                return (
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            value={formData.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Password"
                            value={formData.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                            type="password"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                );
            case 1: // Registration Form
                return (
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            value={formData.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Password"
                            value={formData.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                            type="password"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange(e, 'confirmPassword')}
                            type="password"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Register
                        </Button>
                    </Box>
                );
            case 2: // Password Reset Form
                return (
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            value={formData.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Reset Password
                        </Button>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" textAlign="center" sx={{ mb: 2 }}>
                User Authentication
            </Typography>
            <Tabs value={tabIndex} onChange={handleTabChange} centered>
                <Tab label="Login" />
                <Tab label="Register" />
                <Tab label="Reset Password" />
            </Tabs>
            {renderForm()}
        </Container>
    );
};

export default AuthPage;
