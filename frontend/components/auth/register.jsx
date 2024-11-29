import React, { useState, useEffect } from "react";

import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

function Register() {

    return (

        <Box sx={{

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            bgcolor: "background.default",
            p: 3,

        }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Box sx={{
                        maxWidth: 400,
                        width: "100%",
                        bgcolor: "white",
                        boxShadow: 3,
                        borderRadius: 2,
                        p: 4,
                    }}
                    >
                        <Typography variant="h5" align="center" gutterBottom>Register for Encryptora</Typography>

                        <Box component="form" sx={{ mt: 2 }}>
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Username"
                                type="username"
                                fullWidth
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                required
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

}