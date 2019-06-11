import React from 'react';
import {Card,Button } from 'semantic-ui-react';
import axios from 'axios';


const Menu = (props) => {
// state = [food, food, food]

//     componentDidMount(

//     )


    return (
    
    <div>
        <Card>
            <Card.Content>
                <Card.Header> {props.name}</Card.Header>
                {/* <ItemsList/> */}
            </Card.Content>
                <Button  color="gray" onClick={() => props.updateMenu(props.id)} > Update Menu  </Button>
                <Button color='inverted red' onClick={() => props.deleteMenu(props.id)} > Delete Menu  </Button>
        </Card>
    </div>
    )
}




    

export default Menu