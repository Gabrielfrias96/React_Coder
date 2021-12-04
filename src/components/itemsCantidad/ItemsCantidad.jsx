import {Button , Box, Paper} from "@mui/material"
import { useState } from "react"



export function ItemsCantidad ({producto}){
    
    const [cantidad , setCantidad] = useState(1)

    const handleRestar = () =>{
       cantidad > 1 && setCantidad(cantidad - 1)
    }
     const handleSumar = () =>{
        cantidad < producto.stock && setCantidad(cantidad + 1)
     }

    return (
        <>
            <Box
            sx={{display:"flex", marginTop:"20px;"}}
            >
                <Button 
                onClick={handleRestar}
                variant="outlined"
                >
                    -
                </Button>
                <Paper
                variant="outlined"
                sx={{display:"flex", justifyContent:"center", alignItems:"center", mx:"10px" , width:"50px"}}
                >
                    {cantidad}
                </Paper>
                <Button 
                onClick={handleSumar}
                variant="contained"
                >
                    +
                </Button>
                
            </Box>
            {producto.stock > 1 
            ?   <Button 
                    variant="contained" 
                    color="success" 
                    sx={{width:"100%", marginTop:"15px"}}
                    >
                        Agregar al Carrito
                </Button>
            :   <Button 
                    variant="contained" 
                    color="success" 
                    sx={{width:"100%", marginTop:"15px"}}
                    disabled
                    >
                        No hay Stock
                </Button>
        
            }
        </>
    )

}