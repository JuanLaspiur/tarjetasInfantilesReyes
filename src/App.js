import './App.css';
import { useState } from 'react';
import Cena from './componentes/Cena';


function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      imagen:"https://www.html6.es/img/rey_atanagildo.png"
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      imagen:"https://www.html6.es/img/rey_ervigio.png "
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      imagen:"https://www.html6.es/img/rey_ataúlfo.png"
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      imagen:"https://www.html6.es/img/rey_leogivildo.png"
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      imagen:"https://www.html6.es/img/rey_recesvinto.png"

    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      imagen:"https://www.html6.es/img/rey_sisebuto.png"
    }
  ]

  const [total,setTotal]=useState(0);

  return (
    <div className="App">

    <h1>Total a pagar: ${total}</h1>
    <div className="cajaCentral"> 
      <Cena nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} imagen = {reyes[0].imagen} setTotal={setTotal}/>
      <Cena nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} imagen = {reyes[1].imagen} setTotal={setTotal}/>
      <Cena nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} imagen = {reyes[2].imagen} setTotal={setTotal}/>
      <Cena nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} imagen = {reyes[3].imagen} setTotal={setTotal}/>
      <Cena nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} imagen = {reyes[4].imagen} setTotal={setTotal}/>
      <Cena nombre={reyes[5].nombre} color={reyes[5].color} precio={reyes[5].precio} imagen = {reyes[5].imagen} setTotal={setTotal}/>
      </div>    
    </div>
  );
}

export default App;
