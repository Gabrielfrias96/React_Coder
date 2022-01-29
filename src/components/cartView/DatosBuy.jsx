import { Button, Grid, TextField, Typography } from "@mui/material"
import { collection , Timestamp, addDoc, writeBatch, query , where, getDocs, documentId} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'
import {useState, useContext} from 'react'
import {CartContext} from '../../context/MiContext'
import Swal from 'sweetalert2'
import './material-ui.scss'



export const DatosBuy = ()=> {

    const {carrito,total} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        celular: '',
        direccion: ''
    })


    const handleValues = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const validationInput = (values) => {
        if (values.nombre === "" || values.nombre.length < 3 ) { return false }
        if (values.apellido === "" || values.apellido.length < 3 ) { return false}
        if (values.dni === "" || values.dni.length < 5 ) { return false}
        if (values.celular === "" || values.celular.length < 8 ) { return false }
        if (values.direccion === "" || values.direccion.length < 5 ) { return false }
        else { return true}
    }

    const handleSubmit = async (e) => {
         e.preventDefault()
         if(validationInput(values) === true) {
             const venta = {
                 comprador : {...values, },
                 items: {...carrito},
                 fecha: Timestamp.fromDate(new Date()),
                 valor: total
             };
             

             // Se inicia el lote de escritura
             const batch = writeBatch(db);

             // Se hace referencia a las colecciones de la base de datos 
             const productosRef = collection(db,"productos");
             const ventasRef = collection(db,"ventas");

             // Se hace la estructura de la consulta
             const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

             // Se llama a los productos de la base de datos que estan en el carrito.
             const lista = await getDocs(q)

             //contenedor de productos sin stock agregados al carrito
             const productosSinStock = [];
             
             // Se recorre el array devuelto en la consulta y se condiciona para modificar el stock o enviar al array de productos sin stock
             lista.docs.forEach(doc => {
                 const productosCarrito = carrito.find(prod => prod.id === doc.id)
     
                 if (doc.data().stock >= productosCarrito.cantidad){
                     batch.update(doc.ref,{
                         stock: doc.data().stock - productosCarrito.cantidad
                     })
                 }
                 else { productosSinStock.push(productosCarrito)}
             })
             
             // Se condiciona si hay productos sin stock

             if (productosSinStock.length === 0){

                // Se hace update de los stock de los productos
                 batch.commit()
                 // Se registra la venta en la base de datos
                addDoc(ventasRef, venta)
                .then((res)=> {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Compra exitosa',
                        text:`Tu codigo de Orden y Seguimiento es: ${res.id}`,
                        showConfirmButton: false,
                        timer: 10500
                      })
                });
                
                
             }
             else { console.log(productosSinStock)}
         }
         else { Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Los datos de la compra son Incorrectos',
            showConfirmButton: false,
            timer: 1500
          })}



         } 


    return (
        <>
            <Grid container spacing={2} sx={{width:"90%", marginTop:"25px"}}>
                <Grid item md={12}>
                    <Typography variant="h5" component="h1" >
                        Datos de la Compra
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" name="nombre"  label="Nombre" variant="outlined" fullWidth onChange={handleValues}/>
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" name="apellido"  label="Apellido" variant="outlined" fullWidth onChange={handleValues}/>
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" name="dni"  label="DNI" variant="outlined" fullWidth onChange={handleValues}/>
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" name="celular"  label="Celular" variant="outlined" fullWidth onChange={handleValues}/>
                </Grid>
                <Grid item md={12}>
                    <TextField id="outlined-basic" name="direccion"  label="Dirección" variant="outlined" fullWidth onChange={handleValues}/>
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" color="success" fullWidth onClick={handleSubmit}>
                        Finalizar Compra
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}