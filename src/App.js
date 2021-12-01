
import React from "react";
import "../src/index.css";
import {Header} from "./components/header/Header"
import {Contador} from "./components/contador/Contador"
import { ItemsListContainer } from "./components/itemsListContainer/ItemsLisContainer";
import { ItemsDetails } from "./components/itemsDetails/ItemsDetails";


function App() {
  return (
    <>
    <Header></Header>
    <Contador/>
    <ItemsListContainer/>
    <ItemsDetails/>
    </>
  );
}

export default App;
