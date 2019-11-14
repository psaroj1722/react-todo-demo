import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './component/layout/header'
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import About from './component/pages/About';
import Gallery from './component/pages/Gallery';
import Contact from './component/pages/Contact';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';




class App extends Component {
state = { 
  todos: []
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({ todos:res.data }))
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
      <Router>
        <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                    <AddTodo  addTodo={this.addTodo} />
                    <Todos todos={this.state.todos}  markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Contact" component={Contact} />
             
            </div>
          </div>
      </Router>
     );
  }

}

export default App;
