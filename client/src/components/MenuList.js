import React from 'react';
import Menu from './Menu'

const MenuList = ({ menus, updateMenu, deleteMenu}) => {

    const renderMenu = () => {
        return (
            menus.map( menu => 
            <Menu 
            key={menu.id}
            {...menu}
            updateMenu={updateMenu}
            deleteMenu={deleteMenu}
            /> 
        ) 
              )
    }
   
   return (
    <div>
     {renderMenu()}
    </div>
   )
}

export default MenuList
