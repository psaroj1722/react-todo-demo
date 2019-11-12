import React, { Component } from 'react'

export class AddTodo extends Component {

state = {
    title:''
}
onChange = (e) => this.setState({ [e.target.name]:e.target.value });

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title:''});
}

    render() {
        return (
           <form className="searchForm" onSubmit={this.onSubmit} style={{display:'flex'}}>
               <input type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} style={{flex:'10'}}/>
               <input type="submit" value="submit" className="submitBtn" style={{flex:'1'}}/>
              
           </form>
          
        )
    }
}
export default AddTodo;