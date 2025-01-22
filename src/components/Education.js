import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Education = () => {
    return (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h4" gutterBottom>
                Education
            </Typography>
            <Box>
                <Typography variant="h6">Bachelor of Technology in Computer Science</Typography>
                <Typography variant="body2" color="text.secondary">
                    KKR & KSR Institue Of Technology And Sciences, 2019 - 2023
                </Typography>
            </Box>
        </Paper>
    );
};

export default Education;
