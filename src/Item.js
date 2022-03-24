import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <article>
            <h2>{producto.title}</h2>
            <img src={producto.image} />
            <p>Precio : ${producto.price}</p>
            <section className="container-ver-detalle">
                <Link className="ver-detalle" to={`/producto/${producto.id}`}>
                    ver detalle
                </Link>
            </section>
        </article>
    );
};

export default Item;
