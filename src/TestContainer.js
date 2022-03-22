import {useCallback, useState} from 'react';
import TestList from './TestList';

export const TestContainer = () => {

    const [nombre, setNombre] = useState("")
    const [usuarios,setUsuarios] = useState([]);

    const handleClick = () => {
        const usuario = {
            nombre: nombre,
            id : Math.random()
        }
        setUsuarios([...usuarios, usuario])
        setNombre("")
    }

    const handleChange = (e) => {
        setNombre(e.target.value)
    }

    const borrarUsuario = (id) => {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id))
    }

    const borrarUsuarioMemorizada = useCallback(borrarUsuario,[usuarios])

    console.log("Render Container")

    return (
        <div>
            <input type="text" onChange={handleChange} value={nombre}/>
            <button onClick={handleClick}>agregar</button>
            <TestList usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
        </div>
    )
}