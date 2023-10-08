import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

import { useGetTaskListQuery } from '../../services/apiService';
import { Task } from './Tasks/Task';

export const SMRPage: React.FC = () => {
    const { data, isFetching } = useGetTaskListQuery();

    console.log(data, isFetching);

    return (
        <Box sx={{ ml: '250px', mt: '94px' }}>
            <TableContainer sx={{ padding: '0 10px', width: 'calc(100% - 25px)' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: '8%' }}>Уровень</TableCell>
                            <TableCell sx={{ width: '45%' }}>Наименование работ</TableCell>
                            <TableCell>Основная з/п</TableCell>
                            <TableCell>Оборудование</TableCell>
                            <TableCell>Накладные расходы</TableCell>
                            <TableCell>Сметная прибыль</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Task />
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
