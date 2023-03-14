import React from "react";
import '../stylesheets/Calboton.css';

function BotonCal(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return (
        <div
            className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default BotonCal;