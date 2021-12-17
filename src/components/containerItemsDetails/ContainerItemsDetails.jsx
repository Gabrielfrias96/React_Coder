import { Grid , Paper , Typography, Rating} from "@mui/material"
import { ItemsCantidad } from "../itemsCantidad/ItemsCantidad";


export function ContainerItemsDetail({producto, value, setValue}){
    
     
    
    return(
        <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    >
                        <Grid item p={5} xs={2}
                        sx={{cursor:"pointer"}}
                        display="flex"
                        justifyContent="center"
                        alignItems="start"
                        minHeight="100vh">
                            <div> <img className="img-mini" src={producto.img} alt="" /></div>
                        </Grid>
                        <Grid item  p={5} xs={6}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh">
                            <img className="img-principal" src={producto.img} alt="" />
                        </Grid>
                        <Grid item p={5} xs={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="start"
                        minHeight="100vh">
                            <Paper variant="outlined" sx={{width:"100%", padding:"20px"}} >
                                <h3>{producto.nombre}</h3>
                                <Typography mt={2} component="legend">Califica el Producto</Typography>
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                />
                                <Typography variant="h2" component="h4">
                                    $ {producto.precio}
                                </Typography>
                                <Typography variant="subtittle1" component="p" color="#B4B49F">
                                        Stock Actual: {producto.stock} Unidades.
                                </Typography>
                                <Typography variant="subtittle1" component="p" color="#00a650">
                                        Ver medios de Pago.
                                </Typography>
                                <Typography mt={3} vatiant="h3" component="div">
                                    Descripcion:
                                </Typography>
                                <Typography variant="subtittle1" component="div">
                                        {producto.descripcion}
                                </Typography>

                                <ItemsCantidad producto={producto}/>
                                

                            </Paper>
                        </Grid>

                    </Grid>
    )
}