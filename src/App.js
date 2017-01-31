import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import List from './components/todo/List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'important thing', isComplete: false },
        { id: 2, name: 'important thing', isComplete: true },
        { id: 3, name: 'important thing', isComplete: false },
      ],
      currentTodo: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}/>
            <List todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
