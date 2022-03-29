import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';
import { contexto } from './miContexto';

const ItemDetail = ({ item }) => {

    const [seleccionado, setSeleccionado] = useState(false)
    const { addItem } = useContext(contexto)

    const onAdd = (cantidadSeleccionada) => {
        console.log('Añadir al carrito', cantidadSeleccionada)
        setSeleccionado(cantidadSeleccionada)
        addItem(item,cantidadSeleccionada)
    }

    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div>
                    <Rate onChange={(val) => { console.log(val) }} allowHalf count={5} value={item.rating?.rate} />
                    <span>Rates : {item.rating?.count}</span>
                </div>
            </div>
            <p className="descripcion">{item.description}</p>
            <Contador stock={5} initial={1} onAdd={onAdd} />
            <Link to="/carrito">carrito</Link>
        </article>
    )
}

export default ItemDetail