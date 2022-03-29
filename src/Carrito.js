import { useContext } from "react"
import { contexto } from "./miContexto"
import { db } from "./firebase"
import { collection ,serverTimestamp , addDoc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"


const Carrito = () => {

    const {carrito,total,borrarProdDelCarrito} = useContext(contexto)

    const handleClick = () => {
        //setCarrito(algo)
    }

    const terminarCompra = () => {

        const orden = {
            buyer : {
                nombre : "Horacio",
                telefono : "55555555",
                email : "test@gmail.com"
            },
            items : carrito,
            date : serverTimestamp(),
            total : total
        }

        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)

        pedido
            .then(res=>{
                console.log(res)
                toast.success("Finalizo la compra!" + "Id : " + res.id)
            })
            .catch(error=>{
                toast.error("hubo un error!")
            })

    }

    return (
        <div>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <p>{producto.nuevaCantidad} x {producto.price}</p>
                   {/*  <p>Total Parcial : {producto.cantidad * producto.price}</p> */}
                    <button onClick={handleClick}>borrar</button>
                </div>
            ))}
            <p>Total : ${total}</p>
            <button onClick={terminarCompra}>Terminar la compra</button>
        </div>
    )
}

export default Carrito