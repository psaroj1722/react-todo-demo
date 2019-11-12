import React, {Component} from 'react';
import Header from './component/layout/header'
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import './App.css';
import uuid from 'uuid';


class App extends Component {
state = { 
  todos: [
    {
      id: uuid.v4(),
      title: '10th Passed',
      completed: false
    },
    {
      id: uuid.v4(),
      title: '12th Passed',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'B.Tech Passed',
      completed: false
    }
  ]
}

// Toggle Complete

markComplete = (id) => {
 this.setState({ todos: this.state.todos.map(todo => {
   if(todo.id === id) {
     todo.completed = !todo.completed
   }
   return todo;
 }) })
}

// delTodo Complete

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed:false
    }
   this.setState({todos: [...this.state.todos, newTodo] });
  }


  render(){
  //  console.log(this.state.todos)

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo  addTodo={this.addTodo} />
          <Todos todos={this.state.todos}  markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
     );
  }

}

export default App;
