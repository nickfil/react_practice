import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}></TodoItem>
    ));
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todos;

