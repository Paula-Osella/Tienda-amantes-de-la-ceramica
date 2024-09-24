import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css'; 
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'; 

function ItemListContainer() { 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const { categoryId } = useParams();
    
    useEffect(() => {
        setLoading(true); // Inicia el estado de carga
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection)
            .then((snapshot) => {
                setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .finally(() => {
                setLoading(false); // Finaliza la carga cuando los datos se hayan obtenido
            });
    }, [categoryId]);  

    return (
        <div>
            <h1 className='Titulo'>Productos</h1>
            <div className='Contenedor'>
                {loading ? (
                    // Muestra el spinner mientras se cargan los productos
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </div>
                ) : (
                    // Muestra la lista de productos cuando ya están cargados
                    <ItemList items={items} />
                )}
            </div>   
        </div>
    );
}

export default ItemListContainer;
