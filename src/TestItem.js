import {memo} from "react"


const TestItem = ({usuario,borrarUsuario}) => {

    const handleClick = () => {
        console.log("Borrando", usuario.nombre)
        borrarUsuario(usuario.id)
    }

    console.log("Render Item", usuario.nombre)

    return (
        <div>
            <p>{usuario.nombre}</p>
            <button onClick={handleClick}>Borrar Usuario</button>
        </div>
    )
}
export default memo(TestItem)