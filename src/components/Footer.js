import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="body2" color="text.secondary">
                © 2025 Moulana Shaik. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
