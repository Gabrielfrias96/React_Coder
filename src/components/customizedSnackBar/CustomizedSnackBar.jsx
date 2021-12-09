import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useContext } from 'react';
import { CartContext } from "../../context/MiContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {

  const {carrito, addCarrito} = useContext(CartContext);



  const idProduct = props.producto.id
  const name = props.producto.nomrbe
  const img = props.producto.img 
  const cantidad = props.cantidad
  const stock = props.producto.stock
  const price = props.producto.price
  const newProduct = {id: idProduct , nombre: name, img: img , cantidad: cantidad , stock: stock, precio: price}




  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    addCarrito(newProduct)
    setTimeout(() =>{setOpen(false);
      console.log(carrito)}, 2500);
    
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