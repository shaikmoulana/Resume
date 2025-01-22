import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Experience = () => {
    return (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h4" gutterBottom>
                Experience
            </Typography>
            <Box>
                <Typography variant="h6">Software Trainee - Miracle Software Systems</Typography>
                <Typography variant="body2" color="text.secondary">
                    October, 2023 - Present
                </Typography>
                <Typography variant="body1">
                    - Developed web applications using React.js and ASP.NET Core.<br />
                    - Worked on cloud solutions, integrating GCP services.<br />
                    - Implemented authentication and authorization workflows.
                </Typography>
            </Box>
        </Paper>
    );
};

export default Experience;
