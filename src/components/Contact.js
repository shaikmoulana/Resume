import React from 'react';
import { Typography, Paper, Box, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h4" gutterBottom>
                Contact Me
            </Typography>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField label="Your Name" variant="outlined" fullWidth />
                <TextField label="Your Email" variant="outlined" fullWidth />
                <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
                <Button variant="contained" color="primary">Send Message</Button>
            </Box>
        </Paper>
    );
};

export default Contact;
