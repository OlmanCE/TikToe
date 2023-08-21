import * as React from 'react';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export const RestartButtom = () => {
    return (
        <Button variant="contained" startIcon={<RestartAltIcon />}>Hello world</Button>
    );
}