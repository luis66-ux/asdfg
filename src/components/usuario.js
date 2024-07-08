import React, {useState, useEffect} from "react"

const Usuario = () =>{

    const [nameUser, setNameUser] = useState("")
    const [termContrato, setTermContrato] = useState(false)

    const handleUsuario = (evento) =>{
        //¿Donde está en el evento lo que viene escrito
        //por el usuario desde el input de texto?
        //Respuesta: evento.target.value
        setNameUser(evento.target.value)
    }
    const handleTerminos = () =>{
        setTermContrato(!termContrato)
    }
    return(
        <>
        <h1>Usuario</h1>
        <label htmlFor="usuario">Indique un nombre usuario:</label><br/>
        <input type="text" name="usuario" placeholder="Por ej... Pepe" onChange={handleUsuario}></input><br/>
        <br/><br/>
        {
            nameUser == "Aurelio" &&
            <p>Ya existe ese Usuario</p>
        }
        <br/>
        <input type="checkbox" checked={termContrato} onChange={handleTerminos} name="terminos" />
        <label htmlFor="terminos">Acepto los términos del contrato</label><br></br>
        <button type="button">Guardar nombre del Usuario</button>
        </>

    )
}
export default Usuario