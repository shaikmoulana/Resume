import React from 'react';
import { Typography, Paper, Box, Chip } from '@mui/material';

const Skills = () => {
    const skills = ['React.js', 'ASP.NET Core', 'SQL Server', 'Material-UI', 'Cloud Computing'];

    return (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h4" gutterBottom>
                Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                    <Chip key={index} label={skill} color="primary" />
                ))}
            </Box>
        </Paper>
    );
};

export default Skills;
