import React from 'react';
import "../App.css";
import BotonCal from '../componentes/CalBoton';
import Pantalla from '../componentes/Pantalla';
import BotonClear from '../componentes/BotonClear';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { evaluate } from 'mathjs';

/* import '../stylesheets/contador.css'; */

function Calculadora() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
        setInput(input + val);
    };

    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert("Por favor ingrese valores para realizar los calculos.");
        }
        
    }

    return (
        
    
        <div className='Calculadora'>
           <button>
             <Link to='/'>
                    volver
            </Link>   
            </button>  
            <div className='contenedor-calculadora'>
        
                <Pantalla  input={input}/>
                <div className='fila'>
                    <BotonCal manejarClic={agregarInput}>1</BotonCal>
                    <BotonCal manejarClic={agregarInput}>2</BotonCal>
                    <BotonCal manejarClic={agregarInput}>3</BotonCal>
                    <BotonCal manejarClic={agregarInput}>+</BotonCal>
                </div>
                <div className='fila'>
                    <BotonCal manejarClic={agregarInput}>4</BotonCal>
                    <BotonCal manejarClic={agregarInput}>5</BotonCal>
                    <BotonCal manejarClic={agregarInput}>6</BotonCal>
                    <BotonCal manejarClic={agregarInput}>-</BotonCal>
                </div>
                <div className='fila'>
                    <BotonCal manejarClic={agregarInput}>7</BotonCal>
                    <BotonCal manejarClic={agregarInput}>8</BotonCal>
                    <BotonCal manejarClic={agregarInput}>9</BotonCal>
                    <BotonCal manejarClic={agregarInput}>*</BotonCal>
                </div>
                <div className='fila'>
                    <BotonCal manejarClic={calcularResultado}>=</BotonCal>
                    <BotonCal manejarClic={agregarInput}>0</BotonCal>
                    <BotonCal manejarClic={agregarInput}>.</BotonCal>
                    <BotonCal manejarClic={agregarInput}>/</BotonCal>
                </div>
                <div className='fila'>
                    <BotonClear manejarClear={() => setInput ('')}>
                        Clear
                    </BotonClear>
                </div>
            </div>
        </div>
        
    )
}

export default Calculadora;