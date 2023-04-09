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
    document.getElementById('newItem').value = '';
  }

  render() {
    const itemsList = this.state.items.map((item) => <li>{item}</li>);

    return (
      <div>
        <ul>
          {itemsList}
        </ul>
        <input id="newItem" />
        <button onClick={this.handleClick}>Add Item</button>
      </div>
    );
  }
}