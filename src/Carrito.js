import { useContext, Suspense, lazy } from "react"
import { contexto } from "./miContexto"
import { db } from "./firebase"
import { collection, serverTimestamp, addDoc, updateDoc, query, where, getDocs , doc } from "firebase/firestore"
import { toast } from "react-toastify"


const Carrito = () => {

  const { carrito, total, borrarProdDelCarrito } = useContext(contexto)

  const handleClick = () => {
    //setCarrito(algo)
  }

  const terminarCompra = () => {

    const orden = {
      buyer: {
        nombre: "Horacio",
        telefono: "55555555",
        email: "test@gmail.com"
      },
      items: carrito,
      date: serverTimestamp(),
      total: total
    }

    const ordenesCollection = collection(db, "ordenes")
    const productosCollection = collection(db, "productos")
    const pedido = addDoc(ordenesCollection, orden)

    pedido
      .then(res => {

        const consulta_stock = updateDoc(doc(productosCollection, "w10pr3gZZ22vJfFs81Rt"), { stock: 0 })
        consulta_stock.then(() => {
          toast.success("Finalizo la compra!" + "Id : " + res.id)
        })
      })
      .catch(error => {
        toast.error("hubo un error!")
      })



    /* const ordenesCollection = collection(db, "ordenes")
    const productosCollection = collection(db, "productos")

    Promise.all(carrito.map((producto)=>{
      const filtro = query(productosCollection,where("id","==",producto.id))
      return getDocs(filtro)
    })).then((respuestas)=>{
      
      const stock_actualizados = respuestas.map(doc=>doc.data()) */
    /* const pedido = addDoc(ordenesCollection,orden)
 
    pedido
        .then(res=>{
            console.log(res)
            toast.success("Finalizo la compra!" + "Id : " + res.id)
        })
        .catch(error=>{
            toast.error("hubo un error!")
        }) */

  }


  //const Componente = lazy(import("/archivoComponente.js"))

  return (
    <div>
      <h2>Carrito</h2>

      {/* <Suspense fallback={<div>loading...</div>}>
              <Componente/>
            </Suspense> */}

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