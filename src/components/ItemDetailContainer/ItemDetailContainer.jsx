import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../components/ItemListContainer/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'; // Asegúrate de agregar los estilos necesarios

const ItemDetailContainer = ({ onAddToCart }) => {
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

    const handleAddToCart = (quantity) => {
        if (onAddToCart && product) {
            onAddToCart(product.id, quantity);
            setProduct(prevProduct => ({
                ...prevProduct,
                stock: prevProduct.stock - quantity
            }));
        }
    };

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail {...product} onAdd={handleAddToCart} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;
