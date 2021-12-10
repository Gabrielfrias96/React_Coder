import { Grid, Paper, Divider, Chip, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { CartContext } from '../../context/MiContext'
import  "./cartConstainer.scss";
import { DatosBuy } from './DatosBuy';


export const CartContainer = () =>{

    const {carrito, total} = useContext(CartContext)
    console.log(carrito)

    return (
        
            <Box
            sx={{width:"100%"}}
            >
                <Grid 
                container 
                spacing={1}
                >
                    <Grid
                    item
                    md={7}
                    sx={{display:"flex", justifyContent:"center", alignItems: "start",}}
                    >
                       <DatosBuy/>
                    </Grid>
                    <Grid
                    item
                    md={5}
                    sx={{display:"flex", justifyContent:"center", alignItems: "center"}}
                    >
                        
                        <Paper 
                        elevation={3}
                        sx={{width:"90%", marginTop:"25px", height:"80vh", padding:"10px"}}
                        >
                            <Divider>
                                <Chip label="Mi Compra"/>
                            </Divider>
                            {carrito.map( prod => (
                                <Paper elevation={3}>
                                    <div className="cardCart">
                                        <div className="imgCardCart">
                                            <img src={prod.img} alt={prod.name} />
                                        </div>
                                        <div className="nameCart">
                                            {prod.nombre}
                                        </div>
                                        <div className="cantidadCart">
                                            Cantidad: {prod.cantidad}
                                        </div>
                                        <div className="cantidadCart">
                                            Precio: {prod.precio}
                                        </div>
                                    </div>

                                        
                                </Paper>
                            ))}
                                        <div className="cartFinaly">
                                            <div className="final">
                                                <Button variant="contained" color="success">
                                                    Finalizar Compra
                                                </Button>
                                            </div>
                                            <div className="total">
                                                Total: $ {total}
                                            </div>
                                        </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        
        )
        
    }