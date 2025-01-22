import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const HeaderPart = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Resume
                </Typography>
                <Button color="inherit" href="#contact">Contact Me</Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderPart;
