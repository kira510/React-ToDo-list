import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const {items, clearList, deleteSingleItem, editSingleItem} = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
            return <ToDoItem key={item.id} title={item.title} 
              deleteItem={() => deleteSingleItem(item.id)} 
              editSingleItem={() => editSingleItem(item.id)}/>
        })}
        <button type="button" className="btn btn-danger btn-block
          text-capitalize mt-5" onClick={clearList}>clear list</button>
      </ul>
    )
  }
}
