import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#27272a',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#202124',
            paper: '#27272a',
        },
        info: {
            main: '#2196f3',
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 47,
                    minHeight: 47,
                    '@media (min-width: 600px)': {
                        paddingLeft: 7,
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    minHeight: 47,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'white',
                    height: 3,
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        color: '#a8a8aa',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        height: 35,
                    },
                },
            },
        },
    },
});
