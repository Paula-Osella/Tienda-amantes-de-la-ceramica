import './ItemDetailContainer.css'; 
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
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
