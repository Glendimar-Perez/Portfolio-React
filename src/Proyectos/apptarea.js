import React from 'react';
import "../App.css";
import { Outlet, Link } from "react-router-dom";
import ListaDeTareas from '../componentes/ListaDeTareas';



/* import '../stylesheets/contador.css'; */

function AppTarea() {

    return (

     <div className='aplicacion-tareas'>
        <div className='titulo'>
            <h1>Aplicación de tareas</h1>
            <button>
             <Link to='/'>
                    volver
            </Link>   
            </button>  
        </div>
        <div className='tareas-lista-principal'>
            <h2>Mis Tareas</h2>
            <ListaDeTareas />
        </div>
     </div>

     )
    
}

export default AppTarea;