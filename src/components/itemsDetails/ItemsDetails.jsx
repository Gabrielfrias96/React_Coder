
import { Box , Paper} from "@mui/material"
import {useState, useEffect} from "react"
import {useParams} from "react-router"
import {pedirDatos} from "../../helpers/pedirDatos"
import { ContainerItemsDetail } from "../containerItemsDetails/ContainerItemsDetails"

import "./item-detail.scss"


export function ItemsDetails(){
    const [value, setValue] = useState(2);
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        pedirDatos()
        .then((res) => {
            setProducto(res.find(prod => prod.id === Number(itemId)))
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