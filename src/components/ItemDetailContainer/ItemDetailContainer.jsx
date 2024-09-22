import './ItemDetailContainer.css'; 
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id } = useParams()

    const data ={
        name: "Bandeja",
        price: "15000",

    }
return(
    <div>
        {
            <ItemDetail item={data}/>
        }
    </div>
)
};

export default ItemDetailContainer;
