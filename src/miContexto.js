import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (producto, nuevaCantidad) => {
        
        console.log(producto.price * cantidad)

        const copia = carrito.slice(0)
        copia.push({ ...producto, nuevaCantidad })
        setCarrito(copia)
        setCantidad(cantidad + nuevaCantidad)
        setTotal(total + producto.price * nuevaCantidad)
        
        /* if(yaExisteEnCarrito(id)){
            
            
        }else{
            copia.push()

        } */
    }

    const yaExisteEnCarrito = (id) => { }

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