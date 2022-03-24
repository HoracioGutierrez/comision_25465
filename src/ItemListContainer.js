import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection , getDocs , getFirestore, query , where } from "firebase/firestore"
//getDocs - getDoc - collection - updateDoc - addDoc - query - where

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {

        const productosCollection = collection(db,"productos")
        const consulta = getDocs(productosCollection)
        //const consulta = getDocs(query())
        
        consulta
            .then((resultado)=>{
                
                const array_de_resultados = resultado.docs.map((doc)=>{
                    return doc.data()
                    //console.log(doc.id)
                })

                //console.log(array_de_resultados)
                setProductos(array_de_resultados)
                setLoading(false)
            })
            .catch(()=>{
                toast.error("Error al cargar los productos")
            })
        
        //fetch('/productosPublic.json') 
        /* fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json()
            })
            .then((resultado) => {
                setProductos(resultado)
            })
            .catch(() => {
                toast.error("Error al cargar los productos")
            })
            .finally(() => {
                setLoading(false)
            }) */

    }, [idCategoria])

    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return <ItemList productos={productos} />
    }
}

export default ItemListContainer