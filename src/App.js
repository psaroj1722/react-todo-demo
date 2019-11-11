import React, {Component} from 'react';
import Header from './component/layout/header'
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import './App.css';


class App extends Component {
state = { 
  todos: [
    {
      id: 1,
      title: '10th Passed',
      completed: false
    },
    {
      id: 2,
      title: '12th Passed',
      completed: false
    },
    {
      id: 3,
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


  render(){
  //  console.log(this.state.todos)

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos}  markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
     );
  }

}

export default App;
