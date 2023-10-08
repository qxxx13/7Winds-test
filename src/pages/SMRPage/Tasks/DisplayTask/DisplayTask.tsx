import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FeedIcon from '@mui/icons-material/Feed';
import { IconButton, Paper, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';

import { createData } from './createData';

export const DisplayTask: React.FC = () => {
    const [isShownButtons, setIsShownButtons] = useState(false);

    const onMouseEnter = () => {
        setIsShownButtons(true);
    };

    const onMouseLeave = () => {
        setIsShownButtons(false);
    };

    const rows = [
        createData(
            <>
                {!isShownButtons ? (
                    <IconButton onMouseEnter={onMouseEnter}>
                        <FeedIcon />
                    </IconButton>
                ) : (
                    <Paper onMouseLeave={onMouseLeave} sx={{ display: 'flex', width: 'fit-content', borderRadius: 2 }} elevation={10}>
                        <IconButton>
                            <FeedIcon />
                        </IconButton>
                        <IconButton>
                            <DeleteForeverIcon color="error" />
                        </IconButton>
                    </Paper>
                )}
            </>,
            'Южная площадка',
            20348,
            2561,
            1589,
            1000258,
            1,
        ),
    ];

    return (
        <>
            {rows.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>{row.level}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.selary}</TableCell>
                    <TableCell>{row.oborudovanie}</TableCell>
                    <TableCell>{row.nakladnie}</TableCell>
                    <TableCell>{row.pribil}</TableCell>
                </TableRow>
            ))}
        </>
    );
};
