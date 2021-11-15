import React, {useState} from "react";


export function Contador(){
    
    const [counter,setCounter] = useState(0)

    function sumar(){
        setCounter(counter + 1)
    }

    function reiniciar(){
        setCounter(counter - counter)
    }


    return (
        <div>
        <div className="">
            <button onClick={sumar}>Sumar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
        <div className="">{counter}</div>
        </div>
    )
}