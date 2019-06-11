import React, { Component, } from 'react';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import { Container, } from "semantic-ui-react";
import Menu from './components/Menu'
import axios from 'axios';


class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    // MENU make a call to our rails server to get Items
    axios.get('/api/menus')
    .then( res => {
      this.setState({menus: res.data,})
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (name) => {
    // MENU make api call to rails server to add item
    // MENU update state
    axios.post('/api/menus', {name})
    .then( res => {
      const {menus, } = this.state;
      this.setState({ menus: [...menus, res.data]})
    })
  }

  updateMenu = (id) => {
    // MENU make api call to update MENU
    // MENU update state
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map( t => {
        if (t.id === id)
        return res.data;
        return t;

      })
      this.setState({ menus, })
    })
  }

  deleteMenu = (id) => {
    // MENU make api call to delete MENU
    // MENU remove it from state
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus,} = this.state;
      this.setState({menus: menus.filter(t => t.id !== id), })
    })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <br />
        <h1> Welcome to Gobble's Diner</h1>
        <p>Please choose which menu you would like to order from.</p> 
        <p> Or... you can even create your own menu down below. </p> 
        <br />
        <MenuList id='menudisplay'
          menus={this.state.menus}
          viewItem={this.viewItem}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />

        <Menu />
        <MenuForm addMenu={this.addMenu} />
      </Container>
    );
  }
}

export default App;
