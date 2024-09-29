import React from 'react';
import Item from './Item';
import "./ItemList.css";


const ItemList = ({ items, onAdd}) => {
    return (
        <div className="ItemList">
            {items.map((item) => (
                <Item key={item.id} item={item} onAdd={onAdd}/>
            ))}
        </div>
    );
};

export default ItemList;