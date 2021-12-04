import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({producto}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log(producto)
    setTimeout(() =>{setOpen(false)}, 2500)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%', marginTop:"20px;"}}>
      <Button variant="contained" color="success" onClick={handleClick}>
        Comprar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          El producto se Agrego al Carrito de Compras!
        </Alert>
      </Snackbar>
    </Stack>
  );
}