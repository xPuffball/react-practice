import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"

const matchlist = [
  {
    redteam: "T1",
    blueteam: "HLE",
    redscore: 12,
    bluescore: 4,
    winner: "T1"
  },
  {
    redteam: "DK",
    blueteam: "GENG",
    redscore: 5,
    bluescore: 7,
    winner: "GENG"
  },
  {
    redteam: "AF",
    blueteam: "DRX",
    redscore: 8,
    bluescore: 7,
    winner: "AF"
  }
]

function MatchHistory(){
  return (
    matchlist.map((match) => {
      return (
        <Match match={match}/>
      )
    })
  )
}

function Match(props){
  const {redteam, blueteam, redscore, bluescore, winner} = props.match
  return (
    <div>
      <section>
        <span className = {winner === redteam ?  'winner' : 'loser'}>
          <h1>{redteam}</h1>
          <h2>{redscore}</h2>
        </span>
        <span className = {winner === blueteam ?  'winner' : 'loser'}>
          <h1>{blueteam}</h1>
          <h2>{bluescore}</h2>
        </span>
      </section>
      <span className="win">
        Winner: {winner}
      </span>
    </div>
  ) 
}

ReactDOM.render(<MatchHistory/>, document.getElementById('root'))
