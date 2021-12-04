
import React from "react";
import "../src/index.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {Header} from "./components/header/Header"
import { ItemsListContainer } from "./components/itemsListContainer/ItemsLisContainer";
import { ItemsDetails } from "./components/itemsDetails/ItemsDetails";


function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ItemsListContainer/>}/>
          <Route path="/detalle/:itemId" element={<ItemsDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
