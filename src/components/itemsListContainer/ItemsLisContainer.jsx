import { Container, Box, Card , CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link, useParams } from "react-router-dom"
import { useEffect , useState} from 'react';
import "./items-style.scss"
import {db} from "../../firebase/config"
import { getDocs, collection } from 'firebase/firestore/lite';




export function ItemsListContainer(){
    
    const [load, setload] = useState(false)
    const [productos, setProductos] = useState([])
    const {catId} = useParams()

    useEffect(()=>{
        setTimeout(()=>{
            // referencia
        const productosRef = collection(db,`productos`)
        //GET  a la db
        getDocs(productosRef)
            .then((results) => {
                const items = results.docs.map(doc => (
                    {id: doc.id, ...doc.data()}
                ))

                if (!catId) {
                    
                    setProductos(items)
                }
                else{ 
                    setProductos(items.filter(item => item.category === catId))
                }

                
            })
            .finally(setload(true))
        }, 500)
    
    }, [catId])


    return (
        <Container 
        >
            { load === false
            ? <Box sx={{textAlign:"center", height:"100vh" ,marginTop:"100px"}}>
                <CircularProgress/>
            </Box>
            : <>
                <div className="filtros">
                <div className="category">
                    <Link to="/category/monitores">Monitores</Link>
                </div>
                <div className="category">
                    <Link to="/category/notebooks">Notebooks</Link>
                </div>
                <div className="category">
                    <Link to="/category/tablets">Tablet's</Link>
                </div>
                <div className="category">
                    <Link to="/category/otros">Otros</Link>
                </div>
                </div>
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
                                        {prod.nombre}
                                        </Typography>
                                        <Box 
                                        sx={{display: 'flex',justifyContent:"space-between"}}
                                        >
                                            <Typography variant="body2" color="text.secondary">
                                            Precio: $ {prod.precio}
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