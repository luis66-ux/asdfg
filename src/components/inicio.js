import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

const Inicio = () =>{
    return(
        <>
            <h1>Hola desde Inicio</h1>
            <div>
                <Link to="/perfil">Ir a perfil</Link><br/>
                <Link to="/usuario">Ir a usuario</Link>
            </div>
        </>
    )
}
export default Inicio