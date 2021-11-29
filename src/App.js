
import React from "react";
import "../src/index.css";
import {Header} from "./components/header/Header"
import {Contador} from "./components/contador/Contador"
import { ItemsListContainer } from "./components/itemsListContainer/ItemsLisContainer";


function App() {
  return (
    <>
    <Header></Header>
    <Contador/>
    <ItemsListContainer greting="Hola mundo"/>

    </>
  );
}

export default App;
