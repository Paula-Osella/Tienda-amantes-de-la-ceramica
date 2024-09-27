import './ItemDetailContainer.css'; 
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id } = useParams()
useEffect(()=>{
const db = getFirestore()
const docRef= doc(db, "items", id)
getDoc(docRef)
.then((snapShot)=> {
setItem({
    id: snapShot.id,
    ...snapShot.data()
})
})
},[])
return(
    <div>
        {
            <ItemDetail item={item}/>
        }
    </div>
)
};

export default ItemDetailContainer;
