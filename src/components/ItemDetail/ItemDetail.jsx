import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el ID del producto de la URL
import { getProductById } from "../../components/ItemListContainer/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Obtiene el ID del producto de la URL

    useEffect(() => {
        getProductById(Number(id)) // Asegúrate de pasar el ID correcto
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;
