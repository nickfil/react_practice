import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: "NLU+ lecture 12",
        completed: false
      },
      {
        id: 2,
        title: "ST lecture 7",
        completed: false
      },
      {
        id: 3,
        title: "ST lecture 8",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id ===  id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  deleteItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) =>{
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){
    console.log(this.state.todos);
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}></Todos>
      </div>
    </div>
  );
}
}

export default App;
