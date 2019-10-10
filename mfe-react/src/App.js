import React, { Component } from 'react';
import './App.css';
import {Clock} from "./Clock";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  constructor(props) {     
    super(props);     
    this.state = { error: false };
  }
  componentDidCatch(error, info) {     
    this.setState({ error, info });
  }
  render() {
    return (
      <div className="App">
        <Clock/>
      </div>
    );
  }
}

export default App;
