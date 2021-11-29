import {items} from '../data/items'


export const pedirDatos = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(items)
        },2000)
    })
}
