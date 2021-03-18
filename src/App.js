// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Circle from './components/Circle';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pointIndex: []
    }
  }

  computeRange = (msg) => {
    console.log(msg)
  }

  getChildrenMsg = (msg) => {
    let tempArr = this.state.pointIndex
    tempArr.push([msg])
    this.setState({
      pointIndex : tempArr
    }, () => {
      console.log(this.state.pointIndex)
    })
  }

  render() {
    return (
      <div className="App">
        <Circle parent={ this } color="red" />
        <Circle parent={ this } color="orange" />
        <Circle parent={ this } color="yellow" />
        <Circle parent={ this } color="green" />
        <Circle parent={ this } color="blue" />
        <Circle parent={ this } color="indigo" />
        <Circle parent={ this } color="Violet" />
      </div>
    );
  }
}

export default App;
