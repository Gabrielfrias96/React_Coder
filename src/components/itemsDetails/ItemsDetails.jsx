
import { Box , Paper} from "@mui/material"
import { collection, getDocs } from "firebase/firestore/lite"
import {useState, useEffect} from "react"
import {useParams} from "react-router"
import {db} from "../../firebase/config"
import { ContainerItemsDetail } from "../containerItemsDetails/ContainerItemsDetails"

import "./item-detail.scss"


export function ItemsDetails(){
    const [value, setValue] = useState(2);
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        const productosRef = collection(db,`productos`)
        //GET  a la db

        getDocs(productosRef)
            .then((results) => {
                const items = results.docs.map(doc => (
                    {id: doc.id, ...doc.data()}
                ))

                const filter = items.find(prod => prod.id === itemId)

                setProducto(filter)
            })
            
        })

    return (
        <>
            <Box className="container-paper">
                <Paper sx={{width:"90%"}}>
                    <ContainerItemsDetail producto={producto} value={value} setValue={setValue}/>
                </Paper>
            </Box>

        </>
    )
}