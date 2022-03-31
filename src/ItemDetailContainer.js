import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase"
import { collection, getDoc, doc, query, where, getDocs } from "firebase/firestore"


const ItemDetailContainer = ({titulo}) => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams()
  const [rateActual, setRateActual] = useState(0)

  //console.log(typeof idProducto)
  //console.log(typeof Number(idProducto))


  useEffect(() => {

    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id", "==", Number(idProducto)))
    const pedido = getDocs(filtro)

    /* const pedido = getDoc(doc(productosCollection, "sw7dPqW7HcpFhqcoPw1J"))
    console.log(pedido)

    pedido
      .then(res => console.log(res.data()))
      .finally(() => console.log("fin")) */


    pedido
      .then(res => setItem(res.docs[0].data()))
      .catch(() => toast.error("Error al cargar los productos"))
      .finally(() => setLoading(false))

    //setItem(res.docs.map(doc => doc.data())[0])
    //const pedido = getDoc(doc(productosCollection,"wGWFvOpJ6M7iB8J9LwCO"))
    //pedido.then((res)=>console.log(res.data())

  }, [idProducto])

  if (loading) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <ItemDetail item={item} />
    )
  }
}

export default ItemDetailContainer