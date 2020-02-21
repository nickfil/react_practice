import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value : null,
      };
    }
  
    render() {
      return (
        <button className="square"
                style={squareStyle} 
                onClick={this.props.onClick}
          >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares : Array(9).fill(null),
        xIsNext : true,
        lastMove : null,
      }
    }
    
    handleClick(i) {
      const squares = this.state.squares.slice();
      if(!squares[i]){
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares : squares,
          xIsNext : !this.state.xIsNext,
          lastMove : i,
        });
      }
    }
  
    renderSquare(i) {
      return (
        <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
      );
    }

    undo() {
      if(this.state.lastMove){
        const squares = this.state.squares.slice();
        squares[this.state.lastMove] = null;
        this.setState({
          squares : squares,
          xIsNext : !this.state.xIsNext,
          lastMove : null,
        });
      }
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      var playerTextStyle = {fontSize:'24px', margin:'10px 0 20px 0'};
      
      let status;
      if(winner){
        status = 'Winner: ' + winner;
        playerTextStyle = {fontSize:'50px', color:'red', fontWeight: 'bold'};
      }
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
      }
  
      return (
        <div>
          <div className="status" style={playerTextStyle}>{status}</div>
          <div className="board-row" style={boardRow}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row" style={boardRow}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row" style={boardRow}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div> 
          <button className="clearButton" onClick={() => this.setState({squares : Array(9).fill(null), xIsNext : true})} style={Object.assign({float: 'left'}, buttonStyle)}>Clear</button>
          <button className="undoButton" onClick={() => this.undo()}style={Object.assign({float: 'right'}, buttonStyle)}>Undo</button>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        player1: null,
        player2: null,
      }
    }

    render() {
      return (
          <Router>
            <Route exact path='/tic-tac-toe' render={props => (
                <React.Fragment>
                  <div className="totalBodyContainer" style={{width:'100%'}}>
                  <div className="leftContainer" style={{float:'left', width:'300px', position:'relative'}}>
                    <div className="p1" style={{padding:'60px 0 20px 0', textAlign:'left'}}>Give the names of the two players:</div>
                    <form style={formStyle}>
                      <label>
                        Player 1:
                        <input style={inputStyle} type="text" name="name" />
                      </label>
                      <input style={submitButtonStyle} type="submit" value="Submit" />
                    </form>
                    <form style={formStyle}>
                      <label>
                        Player 2:
                        <input style={inputStyle} type="text" name="name" />
                      </label>
                      <input style={submitButtonStyle} /*onClick={() => this.setState{}}*/type="submit" value="Submit" />
                    </form>
                  </div>
                  <div className="game" style={{textAlign:'center', width:'300px', position:'relative', float:'left'}}>
                  <div className="game-board">
                      <Board />
                  </div>
                  <div className="game-info">
                      <div>{/* status */}</div>
                      <ol>{/* TODO */}</ol>
                  </div>
                  </div>
                  <div className="rightContainer" style={{float:'left', width:'300px', textAlign:'left', margin:'60px 0 0 20px', textDecoration:'underline'}}>
                  <h3>Game Info:</h3>
                    <ul style={{float:'left',width:'300px', marginLeft:'30px'}}>
                      <li>Take turns</li>
                      <li>Click on a cell to play</li>
                      <li>You can only undo your last move</li>
                      <li>Clear will reset the whole game</li>
                    </ul>
                  </div>
                </div>
                </React.Fragment>
            )}/>
        </Router>
      );
    }
  }
  
  // ========================================
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  class TicTacToe extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Game/>
      </div>
    )};
  }

    // ========================================
    // ========================================
    // ======================================== 

  const formStyle = {
    textAlign: 'left',
    width: '100%',
  }
  const inputStyle = {
    margin: '10px 5px 0 5px',
    borderRadius: '5px',
    height: '22px',
    outline: 'none',
  }

  const squareStyle = {
    background: '#fff',
    border: '1px solid #999',
    float: 'left',
    fontSize: '60px',
    fontWeight: 'bold',
    lineHeight: '100px',
    height: '100px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: '0',
    textAlign: 'center',
    width: '100px',
    outline: 'none',
    borderColor: '#333'
  };
  
  const boardRow = {
    clear: 'both',
    content: "",
    display: 'table',
  }

  const buttonStyle = {
    fontSize: '20px',
    marginTop:'10px',
    marginBottom: '10px',
    height:'35px', 
    width:'100px',
    borderRadius: '10px',
    background: '#333',
    color: 'white',
    outline: 'none',
    cursor: 'pointer'
  }

  const submitButtonStyle = {
    fontSize: '12px',
    marginTop:'10px',
    marginBottom: '10px',
    height:'22px', 
    width:'70px',
    borderRadius: '10px',
    background: '#333',
    color: 'white',
    outline: 'none',
    cursor: 'pointer'
  }

  export default TicTacToe;

  