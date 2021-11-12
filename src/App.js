
import React from "react";
import "../src/index.css";
import {Header} from "./components/header/Header"
import { ItemsListContainer } from "./components/itemsListContainer/ItemsLisContainer";


function App() {
  return (
    <>
    <Header></Header>
    <ItemsListContainer greting="Hola mundo"/>

    </>
  );
}

export default App;
