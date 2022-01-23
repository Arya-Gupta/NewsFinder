import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  size=12;
  apiKey="f464442cb524490692e4cce26781e3fd";

  state={
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar color='#f11946' progress={this.state.progress}/>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general1" pageSize={this.size} category="general"/></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general2" pageSize={this.size} category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.size} category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.size} category="entertainment"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.size} category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.size} category="science"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.size} category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.size} category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

// Your API key is: f464442cb524490692e4cce26781e3fd