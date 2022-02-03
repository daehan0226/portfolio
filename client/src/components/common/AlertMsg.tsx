import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

interface Props {
    title: string;
    msg: string;
    type: 'success' | 'info' | 'warning' | 'error';
}

const AlertMsg = ({ title, msg, type }: Props) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={type} variant={undefined}>
                <AlertTitle>{title}</AlertTitle>
                {msg}
            </Alert>
        </Stack>
    );
};

export default AlertMsg;
