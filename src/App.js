import React, { Component } from 'react';
import ToDoInput from "../src/Components/ToDoInput";
import ToDoList from "../src/Components/ToDoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      title: this.state.item,
      id: this.state.id
    }

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuid(),
      item: "",
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    });
  }

  deleteSingleItem = (id) => {
    const filterdItems = this.state.items.filter(item => id !== item.id);

    this.setState({
      items: filterdItems
    });
  }

  editSingleItem = (id) => {
    const filterdItems = this.state.items.filter(item => id !== item.id);

    const selectedItem = this.state.items.find(item => id === item.id);

    this.setState({
      items: filterdItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">toDo Input</h3>
            <ToDoInput item={this.state.item} handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
            <ToDoList items={this.state.items} clearList={this.clearList} 
              deleteSingleItem={this.deleteSingleItem} editSingleItem={this.editSingleItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
