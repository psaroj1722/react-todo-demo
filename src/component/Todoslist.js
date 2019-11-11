

import React, { Component } from 'react'

export class Todoslist extends Component {
getStyle = () => {

    return{
        background:'#c7ecee',
        borderBottom: '1px solid #000',
        padding: '15px ',
        color: this.props.todo.completed ?
        '#c0392b' : 'none'
    }

    // if(this.props.todo.completed){
    //     return {
    //         textDecoration: 'line-through'
    //     }
    // } else{
    //     return {
    //         textDecoration: 'none'
    //     }
    // }
}

    render() {
        // console.log(this.props.todo); 
        const { id, title } = this.props.todo;
        return (

            <div style={this.getStyle()}>
    <h4>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} className="crossBtn">X</button>
        </h4>
            </div>
        )
    }
}

export default Todoslist
