import DashboardIcon from '@mui/icons-material/Dashboard';
import { Divider, Drawer, FormControl, MenuItem, Select, SelectChangeEvent, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

export const SideBar: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);
    const [project, setProject] = useState('1');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleProjectChange = (event: SelectChangeEvent) => {
        setProject(event.target.value);
    };

    return (
        <Drawer
            anchor="left"
            variant="permanent"
            sx={{
                '& .MuiDrawer-paper': {
                    mt: '48px',
                    width: 250,
                    bgcolor: '#27272a',
                },
            }}
        >
            <FormControl>
                <Select
                    sx={{ padding: '7.5px 18px', '&::before': { borderBottom: 'none' } }}
                    variant="standard"
                    id="project-select"
                    value={project}
                    onChange={handleProjectChange}
                >
                    <MenuItem value={1}>Название проекта</MenuItem>
                </Select>
            </FormControl>
            <Divider />
            <Tabs orientation="vertical" variant="scrollable" value={tabValue} onChange={handleTabChange} textColor="inherit">
                <Tab
                    label="По проекту"
                    icon={<DashboardIcon sx={{ mr: 2 }} />}
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
                />
            </Tabs>
        </Drawer>
    );
};
