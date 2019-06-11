import React, {Component} from 'react';
import '../style/export.scss';

class App extends Component {
  state = {
    display:'',
    result: null
  }

  numberHandler= (e)=>{
    const isClicked = e.target.value;
    const display = this.state.display + isClicked;
    this.setState({display})
  }
  clearHandler = ()=>{
    const clearDisplay = '';
    const clearResult = null;
    this.setState({display: clearDisplay});
    this.setState({result:clearResult});
  }
  resultHandler = ()=>{
    if (this.state.result == null){
      if(this.state.display.includes('+')){
        const index = this.state.display.indexOf('+');
        const firstNum = parseInt(this.state.display.slice(0,index));
        const secondNum = parseInt(this.state.display.slice(index+1));
        const result = firstNum + secondNum;
        this.setState({result});
      }
      if(this.state.display.includes('-')){
        const index = this.state.display.indexOf('-');
        const firstNum = parseInt(this.state.display.slice(0,index));
        const secondNum = parseInt(this.state.display.slice(index+1));
        const result = firstNum - secondNum;
        this.setState({result});
      }
      if(this.state.display.includes(':')){
        const index = this.state.display.indexOf(':');
        const firstNum = parseInt(this.state.display.slice(0,index));
        const secondNum = parseInt(this.state.display.slice(index+1));
        const result = firstNum / secondNum;
        this.setState({result});
      }
    }else{
      const lastPlusIndex = this.state.display.lastIndexOf("+"); 
      const lastMinusIndex = this.state.display.lastIndexOf("-");
      const lastDevideIndex = this.state.display.lastIndexOf(":");
      const operatorIndex = Math.max(lastDevideIndex,lastMinusIndex,lastPlusIndex);
      console.log(operatorIndex);
      if(this.state.display[operatorIndex]==="+"){
        const firstNum = parseInt(this.state.display.slice(operatorIndex+1));
        const secondNum = this.state.result;
        const result = firstNum + secondNum;
        this.setState({result});
      }
      if(this.state.display[operatorIndex]==="-"){
        const firstNum = parseInt(this.state.display.slice(operatorIndex+1));
        const secondNum = this.state.result;
        const result = secondNum - firstNum;
        this.setState({result});
      }
      if(this.state.display[operatorIndex]===":"){
        const firstNum = parseInt(this.state.display.slice(operatorIndex+1));
        const secondNum = this.state.result;
        const result = secondNum / firstNum;
        this.setState({result});
      }
    }
  }
  render() {
    return (
      <div className="container">
        <h2>Not yet smart calculator </h2>
        <div className="row">
          <div className="col-12" id="display">{this.state.display}</div>
          <div className="col-12" id="result">{this.state.result}</div>
        </div>
        <div className="row">
          <button className="col-9" onClick={this.clearHandler}>Clear</button>
          <div className="col"><button className="red" onClick={this.numberHandler} value=":">:</button></div>
        </div>
        <div className="row">
        <div className="col"><button onClick={this.numberHandler} value="7">7</button></div>
          <div className="col"><button onClick={this.numberHandler} value="8">8</button></div>
          <div className="col"><button onClick={this.numberHandler} value="9">9</button></div>
          <div className="col"><button className="red" onClick={this.numberHandler} value="-">-</button></div>
        </div>
        <div className="row">
        <div className="col"><button onClick={this.numberHandler} value="4">4</button></div>
          <div className="col"><button onClick={this.numberHandler} value="5">5</button></div>
          <div className="col"><button onClick={this.numberHandler} value="6">6</button></div>
          <div className="col red"><button className="red" onClick={this.numberHandler}value = "+">+</button></div>
        </div>
        <div className="row">
          <div className="col"><button onClick={this.numberHandler} value="1">1</button></div>
          <div className="col"><button onClick={this.numberHandler} value="2">2</button></div>
          <div className="col"><button onClick={this.numberHandler} value="3">3</button></div>
          <div className="col"><button className="red" onClick={this.resultHandler}>=</button></div>
        </div>

      </div>
    );
  }
}

export default App;
