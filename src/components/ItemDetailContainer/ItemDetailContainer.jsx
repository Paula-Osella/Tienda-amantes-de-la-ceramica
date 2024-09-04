import{useState,useEffect} from "react";
import {getProductById} from "../../components/ItemListContainer/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById()
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
        </div>
    );
};


export default ItemDetailContainer;