import { Box } from '@mui/material';
import React, { useState } from 'react';

import { DisplayTask } from './DisplayTask/DisplayTask';
import { EditTask } from './EditTask/EditTask';

export const Task: React.FC = () => {
    const [isEdit, setIsEdit] = useState(false);

    const handleDblClick = (event: React.MouseEvent<HTMLElement>) => {
        event.detail === 2 && setIsEdit(!isEdit);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        event.key === 'Enter' && setIsEdit(false);
    };

    return (
        <Box sx={{ display: 'contents' }} onClick={handleDblClick} onKeyPress={handleKeyPress}>
            {isEdit ? <EditTask /> : <DisplayTask />}
        </Box>
    );
};
