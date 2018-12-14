import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      operation: '+'
    }
  }

  addNumber(number) {
    axios.get('/api/v1/calculate/val1/operator/')
    .then(result => {
      this.setState({
        total:result.data
      })
    })
  }

  operation(operator) {
    if (operator==='square'){
      this.setState({
      total:Math.pow(this.state.total, 2)
    })}
    else if (operator==='squareRoot'){
      this.setState({
      total:Math.sqrt(this.state.total)
    })}
    else if (operator==='clr'){
      this.setState({
      total: ""
    })}
    else{
      this.setState({
      operation:operator
    })}
    
  }
  
   render()  {
  
    return (
      <React.Fragment>
      <div className="App"></div>
        <header className="App-header">

            <h1>Calculator</h1>
        <div className='calculator'>
        <div className="row">
          <div className="col-xs-12">
            <div className="totalDisplay">{this.state.total}</div>
          </div>
        </div>
        <div className="row">
        <div className="col col-xs-6 col-xs-offset-4">
          <div className='calcs'>
            <button type="button" className='buttons' onClick={() => this.addNumber(1)}>1</button>
            <button type="button" className='buttons' onClick={() => this.addNumber(2)}>2</button>
            <button type="button" className='buttons' onClick={() => this.addNumber(3)}>3</button>
            <button type="button" className='buttons' onClick={() => this.operation('+')}>+</button>
            <button type="button" className='buttons' onClick={() => this.operation('=')}>=</button>
          </div>
          <div className='calcs'>              
            <button type="button" className='buttons' onClick={() => this.addNumber(4)}>4</button>
            <button type="button" className='buttons' onClick={() => this.addNumber(5)}>5</button>
            <button type="button" className='buttons' onClick={() => this.addNumber(6)}>6</button>
            <button type="button" className='buttons' onClick={() => this.operation('-')}>-</button>
          </div>
          <div className='calcs'>  
            <button type="button" className='buttons' onClick={() => this.addNumber(7)}>7</button>
            <button type="button" className='buttons' onClick={() => this.addNumber(8)}>8</button>
            <button type="button" className='buttons' onClick={() => this.addNumber(9)}>9</button>
            <button type="button" className='buttons' onClick={() => this.operation('*')}>*</button>
          </div>
          <div className='calcs'>
            <button type="button" className='buttons' onClick={() => this.addNumber(0)}>0</button>
            <button type="button" className='buttons' onClick={() => this.operation('square')}>x²</button>
            <button type="button" className='buttons' onClick={() => this.operation('squareRoot')}>√x</button>
            <button type="button" className='buttons' onClick={() => this.operation('/')}>/</button>
            <button type="button" className='buttons' onClick={() => this.operation('clr')}>C</button>
            </div>
          </div>
        </div>
      </div>
      </header>
      </React.Fragment>
    )
   }
  }

export default App;
