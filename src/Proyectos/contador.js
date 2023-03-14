import React from 'react';
import "../App.css";
import Boton from '../componentes/Boton';
import Contar from '../componentes/contar';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
/* import '../stylesheets/contador.css'; */

function Contador() {

    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
        setNumClics(numClics + 1);
    }

    const reiniciarContador = () => {
        setNumClics(0);
    }

    return (
        <div className='Contador'>
            <div className='contador-logo-contenedor'>
                <h1>Contador</h1>
                <button>
             <Link to='/'>
                    volver
            </Link>   
            </button>  
            </div>
            <div className='contenedor-principal-contador'>
                <Contar numClics={numClics} />
                <Boton 
                texto='Clic'
                esBotonDeClic={true}
                manejarClic={manejarClic}/>
                <Boton 
                texto='Reiniciar'
                esBotonDeClic={false}
                manejarClic={reiniciarContador}/>

            </div>
        </div>
    )
}

export default Contador;