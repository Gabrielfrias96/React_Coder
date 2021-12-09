import { Container, Box, Card , CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link  } from "react-router-dom"
import { useEffect , useState} from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import "./items-style.scss"




export function ItemsListContainer(){
    
    const [load, setload] = useState(true)
    const [productos, setProductos] = useState([])


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
        <Container 
        >
            { load 
            ? <Box sx={{textAlign:"center", marginTop:"100px"}}>
                <CircularProgress/>
            </Box>
            : <>
                <Grid container m={3} spacing={3}>
                    {productos.map((prod)=>(
                        <Grid item  xs={4} key={prod.id}>
                            <Link to={`/detalle/${prod.id}`}>
                                <Card className="cards" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={prod.img}
                                        alt={prod.nomrbe}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {prod.nomrbe}
                                        </Typography>
                                        <Box 
                                        sx={{display: 'flex',justifyContent:"space-between"}}
                                        >
                                            <Typography variant="body2" color="text.secondary">
                                            Precio: $ {prod.price}
                                            </Typography>
                                            {
                                                prod.stock > 0 
                                                ?   <Typography variant="body2" color="#00a650">
                                                        ¡Hay Stock!
                                                    </Typography>
                                                :   <Typography variant="body2" color="text.secondary">
                                                        No Hay Stock
                                                    </Typography>
                                            }
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </>
            }
        </Container>
        
    )
}