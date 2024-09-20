import ItemList from './ItemList';
import './ItemListContainer.css'; 

function ItemListContainer() { 
    const products = [1,2,3,4,5,6,7,8]
return(
<div >
    <h1 className='Titulo' >Productos</h1>
    <div className='Contenedor'><ItemList items={products}/></div>   
    </div>
)
}

export default ItemListContainer;
