import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';

interface ToastProps {
  open: boolean;
  message: string;
  severity: AlertColor; // "success" | "info" | "warning" | "error"
  handleClose: (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
}

export default function ToastMessage({ open, message, severity, handleClose }: ToastProps) {
  return (
    <Snackbar open={open} autoHideDuration={7000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
      <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%', borderRadius: 2, p: 1.5 , bgcolor: severity, }} >
        {message}
      </Alert>
    </Snackbar>
  );
}