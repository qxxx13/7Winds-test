import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Breadcrumbs: React.FC = () => {
    return (
        <AppBar sx={{ position: 'absolute', top: 48, left: 250, backgroundImage: 'none', boxShadow: 'none', width: 'calc(100% - 250px)' }}>
            <Toolbar variant="dense">
                <Typography variant="body1" sx={{ mr: 2 }}>
                    Строительно-монтажные работы
                </Typography>
                <Divider orientation="vertical" />
            </Toolbar>
            <Divider />
        </AppBar>
    );
};
