import React, { Component } from 'react';
import './App.css';
import {Clock} from "./Clock";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  constructor(props) {     
    super(props);     
    this.state = { 
      error: false,
      subscription: null,
      logs: ['<li>订阅事件：</li>']
    };
  }
  componentDidMount() {
    let subscription = window.subjectBus.addSubscribe('react_sub',(v) => {
      console.log('react subscribe', v);
      const logs = Array.from(this.state.logs);
      logs.push(`<li>事件：${v.type}，责任人：${v.operator}，日志信息：${v.detail}<li>`);
      this.setState({logs: logs});
      console.log('logs', logs);
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
        <ul dangerouslySetInnerHTML={{__html: this.state.logs}}></ul>
      </div>
    );
  }
}

export default App;
