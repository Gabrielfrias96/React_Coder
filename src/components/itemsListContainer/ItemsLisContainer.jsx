import { Container, Box, Button, Card , CardActions, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect , useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import loading from "./loading-25.gif"




export function ItemsListContainer(){

    const [load, setload] = useState(true)
    const [productos, setProductos] = useState([])

    console.log(productos)

    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
        .finally(()=>{
            setload(false)
           
        })
    }, [])


    return (
        <Container maxWidth="lg">
            { load 
            ? <Box sx={{textAlign:"center"}}>
                <CircularProgress/>
            </Box>
            : <>
                <Grid container m={3} spacing={3}>
                    {productos.map((prod)=>(
                        <Grid item  xs={4} key={prod.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={prod.img}
                                    alt={prod.nomrbe}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {prod.nomrbe}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {prod.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small">Me Gusta</Button>
                                    <Button size="small">Comprar</Button>
                                </CardActions>
                                </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
            }
        </Container>
        
    )
}