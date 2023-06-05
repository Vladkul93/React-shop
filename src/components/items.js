import React, { Component } from 'react';
import Item from './item';

export class Items extends Component {
render() {
    return (
        <main>
            {this.props.items.map(el => (
                <Item  
                item ={el}
                key={el.id} 
                onAdd = {this.props.onAdd}
                onShowItem = {this.props.onShowItem}
                />
            ))}
        </main>
    )
}
}

export default Items;

