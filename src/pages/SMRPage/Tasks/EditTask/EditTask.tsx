import FeedIcon from '@mui/icons-material/Feed';
import { IconButton, TableCell, TableRow, TextField } from '@mui/material';
import React from 'react';

import { createDataEdit } from './createDataEdit';

export const EditTask: React.FC = () => {
    const rows = [
        createDataEdit(
            <IconButton disabled>
                <FeedIcon />
            </IconButton>,
            <TextField sx={{ width: '100%' }} />,
            <TextField />,
            <TextField />,
            <TextField />,
            <TextField />,
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
