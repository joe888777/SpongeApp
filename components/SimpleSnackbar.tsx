// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import { useToastStore } from '../src/store/useToastStore';

// export default function SimpleSnackbar() {
//   const { open, message, hideToast } = useToastStore();

//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: SnackbarCloseReason,
//   ) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     hideToast();
//   };

//   const action = (
//     <React.Fragment>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

//   return (
//     <Snackbar
//       open={open}
//       autoHideDuration={6000}
//       onClose={handleClose}
//       message={message}
//       action={action}
//     />
//   );
// } 