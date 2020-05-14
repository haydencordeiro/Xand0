import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


class Square extends React.Component {
  state={
    currChoice:null

  }
  
  render() {


    return (
      <button className="square" 
      onClick={this.props.HandleClick}
      
      
      >
        {this.props.value}
      </button>
    );


    }

  }




class Board extends React.Component {
  state={
    squares:Array(9).fill(null),
    currPlayer:'X',
    winner:null
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} 
    HandleClick={()=>this.handleClick(i)}
    />;
  }


  handleClick(i)
  {
    if(this.state.squares[i]===null)
    {
    
    let squares=this.state.squares
    let tempPlayer=''
    squares[i]=this.state.currPlayer
    if(this.state.currPlayer==='X')
    {
       tempPlayer='0'
    }
    else{
       tempPlayer='X'
    }
    this.setState({squares:squares,
    currPlayer:tempPlayer
    })
    this.winCheck()
    

  }


  }

  winCheck()
  {
    const winConditons = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // let t=winConditons[1];
    // console.log()
    for(let i=0;i<winConditons.length;i++)
    {
      let t=winConditons[i];
    if(this.state.squares[t[0]]!==null && this.state.squares[t[1]]!==null && this.state.squares[t[0]]!==null )
    {
      if(this.state.squares[t[0]]===this.state.squares[t[1]] && this.state.squares[t[1]]===this.state.squares[t[2]] )
      {
        {this.setState({winner:this.state.squares[t[0]]})}
      }
    } 
    }
    // return null
  }




  render() {
    // const status = 'Next player: X';

    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
    <h1>Winner is:{this.state.winner}</h1>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
