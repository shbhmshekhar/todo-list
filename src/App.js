import React, { Component } from 'react';
import Header from './components/Layout/header'; 
import AddTodo from './components/AddTodo'; 
import Todos from './components/Todos';
import uuid from 'uuid';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Trash out',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Tea',
        completed: false
      },
  ]
  }
  markComplete = (id) => {
    //console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  addTodo = (title) =>{
    console.log(title);
    const newTodo = {
      id : uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo = {this.addTodo} />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
 
}

export default App;
