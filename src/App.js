import React, {Component} from 'react';
import Todos from './component/Todos';
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
markComplete = (id) => {
 this.setState({ todos: this.state.todos.map(todo => {
   if(todo.id === id) {
     todo.completed = !todo.completed
   }
   return todo;
 }) })
}


  render(){
  //  console.log(this.state.todos)

    return (
      <div className="App">
        <Todos todos={this.state.todos}  markComplete={this.markComplete}/>
      </div>
     );
  }

}

export default App;
