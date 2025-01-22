import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const About = () => {
    return (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1">
                Hi, I'm Moulana Shaik, a passionate software developer with expertise in React.js, ASP.NET Core, and cloud computing. I love building innovative solutions and delivering high-quality software.
            </Typography>
        </Paper>
    );
};

export default About;
