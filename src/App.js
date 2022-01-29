
import React, { useState } from "react";
import "../src/index.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {Header} from "./components/header/Header"
import { ItemsListContainer } from "./components/itemsListContainer/ItemsLisContainer";
import { ItemsDetails } from "./components/itemsDetails/ItemsDetails";
import {CartContext} from "./context/MiContext"
import {CartContainer} from "./components/cartView/CartContainer"
import { Footer } from './components/footer/Footer'


function App() {

// Variables con los estados del carrito.  
  const [carrito,setCarrito] = useState([])


// Funcion para Agregar Productos al Carrito.
  const addCarrito = (item) => {

    // Verificar si el Producto Ya Existe en el Carrito
    const resultVerify = carrito.some( prod => prod.id === item.id)
    
    // Condicionamos el Array del Carrito
    if (resultVerify){
      carrito.map(prod => {
        //Si el Producto Existe solo se suman las cantidades.
        if (prod.id === item.id){
          prod.cantidad = prod.cantidad + item.cantidad;
        }
        // Se condiciona que la cantidad despues de ser sumada, no sobre pase el stock del producto Agregado.
        if(prod.cantidad > item.stock){ prod.cantidad = item.stock}
      })
    }
    // Si el Producto No existe, se agrega al carrito.
    else {setCarrito([...carrito, item])}
     
  }

  //Funcion para remover productos del carrito. 

  // Funcion para Limpiar el carrito

  const limpiarCarrito = () => {
    setCarrito([])
  }

  // Total del carrito 
   
     const total = carrito.reduce((a,b) => a+ b.precio * b.cantidad ,0)
      console.log(total)
   

  
  return (
    <CartContext.Provider value={{carrito, addCarrito, total, limpiarCarrito}}>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<ItemsListContainer/>}/>
            <Route path="/category/:catId" element={<ItemsListContainer/>}/>
            <Route path="/detalle/:itemId" element={<ItemsDetails/>}/>
            <Route path="/carrito" element={<CartContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
