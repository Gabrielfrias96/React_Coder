import { Container } from '@mui/material';
import {Contador} from "../contador/Contador"





export function ItemsListContainer({greting}){
    
    return (
        <Container>
            <h1>{greting}</h1>
            <Contador></Contador>

        </Container>
        
    )
}