import React from "react";
import { Box, Typography, Button, GlobalStyles } from "@mui/material";

const Homepage = () => {
    return (

        <>

            <GlobalStyles

                styles={{

                    html: { margin: 0, padding: 0, height: "100%", overflow: "hidden" },
                    body: { margin: 0, padding: 0, height: "100%", overflow: "hidden" },

                }}

            />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    minWidth: "100vw",
                    bgcolor: "black",
                    color: "white",
                    textAlign: "center",
                    margin: 0,
                    padding: 0,
                    overflow: "hidden",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: "bold",
                        mb: 10,
                    }}
                >
                    ENCRYPTORA
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#00d493",
                        color: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        px: 4,
                        py: 2,
                        borderRadius: "30px",
                        boxShadow: "0 0 20px 5px #ffffff",
                        animation: "glow 1.5s infinite",
                        "@keyframes glow": {
                            "0%": { boxShadow: "0 0 10px 5px #ffffff" },
                            "50%": { boxShadow: "0 0 20px 10px #ffffff" },
                            "100%": { boxShadow: "0 0 10px 5px #ffffff" },
                        },
                        '&:hover': {
                            bgcolor: "#f0f0f0",
                            boxShadow: "0 0 25px 10px #ffffff",
                        },
                    }}
                >
                    Get Started
                </Button>
            </Box>
        </>
    );
};

export default Homepage;
