import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const EmailCopyToClipboard = () => {
    const [open, setOpen] = useState(false);

    const email = "support@example.com";

    const handleClick = () => {
        navigator.clipboard.writeText(email);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleClick} aria-label="copy email">
                <FileCopyIcon fontSize='small' color='primary' />
            </IconButton>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Email address copied"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </>
    );
};

export default EmailCopyToClipboard;
