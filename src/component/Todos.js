import React, {Component} from 'react';
import Todoslist from './Todoslist';

class Todos extends Component {
  // markComplete = () => {
  //   console.log('hello')
  // }
  render() {
    return this.props.todos.map((todo) => (
   <Todoslist key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }

}

export default Todos;
