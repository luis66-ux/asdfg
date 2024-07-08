import React, {useState, useEffect} from "react"

const Perfil = () =>{
    // Contadar de likes
    const [contadarLikes, setContadorLikes] = useState(0)
    
    const handleContadarLike = () =>{
        setContadorLikes(contadarLikes+1)
    }
    return(
        <>
            <h1>Estoy en Perfil</h1>
            <button type="button" onClick={handleContadarLike}>Sumar Like</button>
            <p>Conteo de likes: {contadarLikes}</p>
        </>
    )
}
export default Perfil