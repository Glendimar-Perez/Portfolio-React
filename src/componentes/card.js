import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../stylesheets/card.css';


export default  function Card(props){
    return (
        <div className='contenedor-card'>
            <img 
              className='imagen-card'
              src={require(`../imagenes/proyecto-${props.imagen}.jpg`)}
              alt='foto1'/>
            <div className='contenedor-texto-card'>
                <p className='nombre-card'>{props.nombre}</p>
                <p className='texto-card'>{props.texto}</p>
                <Link to={props.link}>
                    Ir Al Link
                </Link>
            </div>
        </div>
    )
}
