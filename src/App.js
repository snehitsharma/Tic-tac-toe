import React,{useState} from 'react';
import './App.css';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import ResetButton from './components/ResetButton';
//import Box from './components/Box';


function App() {
const WIN_CONDITIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [0,4,8],
  [2,4,6]
]

  const [board,setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore:0, oScore:0})
  const [gameover, setGameover] = useState(false);

  const handleBoxClick = (boxidx) =>{
    const updatedBoard = board.map((value, idx) => {
      if(idx === boxidx ){
        return xPlaying === true ? "X" : "O";
      } 
      else{
        return value;
      }
      })
      const winner = checkWinner(updatedBoard);

      if(winner){
        if(winner ==="O"){
          let {oScore} = scores;
          oScore +=1
          setScores({...scores,oScore})
        } else{
          let {xScore} = scores;
          xScore +=1
          setScores({...scores,xScore})
        }
      }

      setBoard(updatedBoard);
      setXPlaying(!xPlaying);
    }

    const checkWinner = (board) =>{
      for(let i=0; i< WIN_CONDITIONS.length; i++){
        const [x,y,z] = WIN_CONDITIONS[i];
        if (board[x] && board[x] === board[y] && board[y] === board[z]){
          setGameover(true)
          return board[x];
        }
      }
    }
    const resetBoard = () => {
      setGameover(false);
      setBoard(Array(9).fill(null))
    }
  return (
    <div className='App'>
      <Scoreboard scores={scores} xpPlaying={xPlaying}/>
      <Board board={board} onClick={gameover ? resetBoard: handleBoxClick}/>
      <ResetButton resetBoard={resetBoard}/>
    </div>
    
  );
}

export default App;
