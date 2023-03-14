import React from "react";
import '../stylesheets/Contar.css'

function Contar({ numClics }) {
    return (
        <div className="contar">
            {numClics}
        </div>
    )
}

export default Contar;