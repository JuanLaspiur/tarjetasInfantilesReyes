import React from 'react'
import './Cena.css';
import { prettyDOM } from '@testing-library/react';

function Cena(props) {
  const comprar=(elemento)=>{
    props.setTotal((e)=>e+props.precio);
    elemento.target.parentNode.parentNode.style.display="none";
  }  


  return (
    <>
    <div className='rey' style={{backgroundColor:props.color}}>
        <h1>{props.nombre}</h1>
        <img src={props.imagen} />
        <div className='titulo'> Precio:</div>
        <div className='precio'> ${props.precio}</div>
        <div> <button onClick={comprar}>Comprar</button></div>
    </div>
    
    
    </>
  )
}

export default Cena