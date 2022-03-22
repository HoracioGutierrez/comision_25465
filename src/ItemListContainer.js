import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import productos from "./productos.json"


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {

        //fetch('/productosPublic.json') 
        fetch('https://fakestoreapi.com/products')
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
            })

    }, [idCategoria])

    return (
        <>
            <p className={loading && "red"}>Texto 1</p>
        </>
    )


    /* return (
        <>
            <p className={loading ? "red" : null}>Texto 1</p>
        </>
    ) */

    /* return (
        <>
            {
                loading ? <p className="rojo">Texto 1</p> : <p className="azul">Texto 1</p>
            }
        </>
    ) */

    /* return (
        <>
            <p>{loading ? "Un texto" : "El otro"}</p>
        </>
    ) */
    

    
    /* return (
        <>
            {
                loading ? <p>Cargando</p> : <p>Termino la carga</p>
            }
        </>
    )
     */
    
    /* return (
        <>
            { loading && <p>Cargando</p> }
        </>
    )
    */

    /* return (
        <>
            { loading ? <h1>Cargando...</h1> : <ItemList productos={productos} /> }
        </>
    ) */

    /* if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return <ItemList productos={productos} />
    } */
}

export default ItemListContainer