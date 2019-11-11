import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
           <form className="searcForm">
               <input type="text" placeholder="Add Todo..." />
               <input type="submit" value="submit" className="submitBtn" />
           </form>
        )
    }
}
export default AddTodo;