import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: "Camisa",
            precio: 50,
            cantidad: 1
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 100,
            cantidad: 1
        }
    ])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(false)

    const addItem = (producto,cantidad) => {
        //1) Siempre que quiera modificar un estado y es objeto/array lo tengo que copiar
        const copia = carrito.slice(0)

        
        /* if(yaExisteEnCarrito(id)){
            
            
        }else{
            copia.push()

        } */
    }

    const yaExisteEnCarrito = (id) => {}

    const borrarProdDelCarrito = (id) => {
        //filter
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }




    const valorDelContexto = {
        carrito: carrito,
        cantidad: cantidad,
        total: total,
        addItem: addItem
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider