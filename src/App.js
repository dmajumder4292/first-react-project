import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Utkarsh", age: 30},
      {name: "Rushikesh", age: 35},
      {name: "Shubham", age: 40}
    ],
    otherState: 'other data'
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 27},
      {name: "Rushikesh", age: 35},
      {name: "Shubham", age: 40}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: "Utkarsh", age: 27},
      {name: event.target.value, age: 35},
      {name: "Shubham", age: 40}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>First Thing about React! Start Reacting!!!</h1>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximi')}>Switch Name</button> */}
        <button onClick={() => this.switchNameHandler('Maximi')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
