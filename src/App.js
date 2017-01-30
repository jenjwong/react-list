import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'important thing', isComplete: false },
        { id: 2, name: 'important thing', isComplete: true },
        { id: 3, name: 'important thing', isComplete: false },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" placeholder="enter to do item"/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo => {
                return <li key={todo.id}><input type="checkbox" checked={todo.isComplete} />{todo.name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
