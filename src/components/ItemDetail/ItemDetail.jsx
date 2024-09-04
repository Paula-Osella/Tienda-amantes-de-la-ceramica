import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, src, precio, stock }) => {
    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={src} alt={name} />
            </picture>
            <section>
                <p>Precio: ${precio}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <ItemCount 
                initial={0} 
                stock={stock} 
                onAdd={(quantity) => console.log("Cantidad agregada:", quantity)}
            />
        </article>
    );
};

export default ItemDetail;