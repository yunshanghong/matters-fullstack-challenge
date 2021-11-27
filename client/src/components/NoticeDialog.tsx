
import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

const NoticeDialog = (props: any): React.ReactElement => {

    const { onClose, open, NoticeWord } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{NoticeWord}</DialogTitle>

            <DialogActions>
                <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}

export default NoticeDialog;
