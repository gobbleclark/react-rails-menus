import React from 'react';
import Item from './Item'

const ItemList = ({ lists, updateList, deleteList}) => {

    const renderItem = () => {
        return (
            items.map( item => 
            <Item 
            key={item.id}
            {...item}
            updateItem={updateItem}
            deleteItem={deleteItem}
            /> 
        ) 
              )
    }
   
   return (
    <div>
     {renderItem()}
    </div>
   )
}

export default ItemList