import React, { Component } from 'react';
import './App.css';
import {Clock} from "./Clock";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  constructor(props) {     
    super(props);     
    this.state = { 
      error: false,
      subscription: null
    };
  }
  componentDidMount() {
    debugger
    console.log('root component mounted')
    let subscription = window.subjectBus.addSubscribe('react_sub',(v) => {
      console.log('react subscribe', v);
    });
    this.setState({subscription: subscription});
  }

  componentDidCatch(error, info) {     
    console.log(error, info);
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
