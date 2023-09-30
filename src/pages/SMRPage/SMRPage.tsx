import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

export const SMRPage: React.FC = () => {
    return (
        <Box sx={{ ml: '250px', mt: '94px' }}>
            <TableContainer sx={{ padding: '0 10px', width: 'calc(100% - 25px)' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Уровень</TableCell>
                            <TableCell>Наименование работ</TableCell>
                            <TableCell align="right">Основная з/п</TableCell>
                            <TableCell align="right">Оборудование</TableCell>
                            <TableCell align="right">Накладные расходы</TableCell>
                            <TableCell align="right">Сметная прибыль</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
