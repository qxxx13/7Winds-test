import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import { AppBar, Box, Divider, IconButton, Tab, Tabs, Toolbar } from '@mui/material';
import React, { useState } from 'react';

export const TopBar: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <AppBar sx={{ backgroundImage: 'none' }}>
            <Toolbar sx={{ display: 'flex', alignContent: 'center' }} variant="dense">
                <Box>
                    <IconButton sx={{ color: '#a8a8aa' }}>
                        <AppsIcon />
                    </IconButton>
                    <IconButton sx={{ mr: 2, color: '#a8a8aa' }}>
                        <ReplyIcon />
                    </IconButton>
                </Box>
                <Box>
                    <Tabs value={tabValue} onChange={handleTabChange} textColor="inherit">
                        <Tab label="Просмотр" />
                        <Tab label="Управление" />
                    </Tabs>
                </Box>
            </Toolbar>
            <Divider />
        </AppBar>
    );
};
