import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Homepage = () => {

    return (
        <Grid>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "background.default",
                p: 3,
            }}
            >

            </Box>
            <Typography>
                <TextField>ENCRYPTORA</TextField>
            </Typography>
        </Grid>

    )

}