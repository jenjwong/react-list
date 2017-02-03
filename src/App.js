import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import List from './components/todo/List';
import Footer from './components/todo/Footer';
import {addTodo, randomNumGenerator, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers'
import { partial, pipe } from './lib/utils';
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService'

class App extends Component {
  state = {
    todos: [],
    currentTodo: '',
    errorMessage: '',
    message: '',
  };

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos});
    destroyTodo(id)
      .then(()=> this.showTempMessage('deleted'))
  }

  handleTogle = (id) => {
    const getToggledTodo = pipe(findById, toggleTodo);
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated);
    this.setState({todos: updatedTodos});
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo Updated'))
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 1000)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newId = randomNumGenerator();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
    createTodo(newTodo)
      .then(() => this.showTempMessage('success'))
  }


  handleEmptySubmit = (e) => {
    console.log('empty')
    e.preventDefault();
    this.setState({
      errorMessage: 'Please enter a to do item'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do</h2>
        </div>
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        {<span className='success'>{this.state.message}</span>}
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}
          />
            <List
              todos={displayTodos}
              handleTogle={this.handleTogle}
              handleRemove={this.handleRemove}
            />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
