import "../ItemDetailContainer/AddItemButton.css";

const AddItemButton = ({ onAdd, quantity }) => {

    return (
        <button onClick={()=>onAdd(quantity)} className='add-item-button'>Agregar al carrito</button>
    );
};
export default AddItemButton;
