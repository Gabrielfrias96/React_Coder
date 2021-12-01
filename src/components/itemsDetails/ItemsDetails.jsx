import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Grid , Box , Paper , Typography, Rating , Button} from "@mui/material"
import {useState} from "react"

let product = {
    nombre: "Remera de Playa",
    precio: 1500,
    imgMini: "https://via.placeholder.com/100",
    img: "https://via.placeholder.com/600x500",
    description: "Remera de Verano, ideal para un dia de playa o pileta."
}



export function ItemsDetails(){

    const [value, setValue] = useState(2);


    return (
        <>
        <hr />
            <Box>
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
                        <div> <img src={product.imgMini} alt="" /></div>
                    </Grid>
                    <Grid item  p={5} xs={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh">
                        <img src={product.img} alt="" />
                    </Grid>
                    <Grid item p={5} xs={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="start"
                    minHeight="100vh">
                        <Paper variant="outlined" sx={{width:"100%", padding:"20px"}} >
                            <h3>{product.nombre}</h3>
                            <Typography mt={2} component="legend">Califica el Producto</Typography>
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            />
                            <Typography variant="h2" component="h4">
                                $ {product.precio}
                            </Typography>
                            <Typography variant="subtittle1" component="p" color="#00a650">
                                    Ver medios de Pago.
                                </Typography>
                            <Typography mt={3} vatiant="h3" component="div">
                                Descripcion:
                            </Typography>
                            <Typography variant="subtittle1" component="div">
                                    {product.description}
                            </Typography>

                            <Button variant="contained" color="success" sx={{width:"100%", marginTop:"15px"}}>
                                Comprar
                            </Button>
                            

                        </Paper>
                    </Grid>

                </Grid>
            </Box>

        </>
    )
}