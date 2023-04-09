import React from 'react';

export class TodoList extends React.Component {
    state = {
      items: ["item1","item2"]
    };

  handleClick = () => {
    const newItem = document.getElementById('newItem').value;
    this.setState({
      items: [...this.state.items, newItem]
    });
    document.getElementById('newItem').value = "";
  }

  handleReset = () => {
    this.setState({
        items: []
    })
  }

  handleRemove = (event) => {
    event.target.parentElement.remove()
  }

  render() {
    const itemsList = this.state.items.map((item) => <li>{item} <button onClick={this.handleRemove}>Remove</button></li>);

    return (
      <div>
        <ul>
          {itemsList}
        </ul>
        <input id="newItem" />
        <button onClick={this.handleClick}>Add Item</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}