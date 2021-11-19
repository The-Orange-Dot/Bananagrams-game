import {useState} from 'react'
import classes from './table.module.css'
import Timer from './timer'


function Table (props) {

  const table = ["a", "b", "c", "d", "e"]
  const vTable = ["a", "b", "c"]
  const alph = "bcdfghjklmnprstvwy"
  const vowel = "aeiou"
  const newTable = table.map(randNum)
  const vNewTable = vTable.map(vRandNum)
  
function randNum(props) {

    for (let i = 0; i < table.length; i++) {    
      const rand = Math.floor(Math.random() * alph.length);
      return table[i] = alph[rand] 
    }
  }

function vRandNum(props) {

    for (let i = 0; i < vTable.length; i++) {    
      const rand = Math.floor(Math.random() * vowel.length);
      return vTable[i] = vowel[rand] 
    }
  }

  const [shuffle, setShuffle] = useState(["?", "?", "?", "?", "?"])
  const [vShuffle, vSetShuffle] = useState(["?", "?", "?"])


  return(
    <div className={classes.container}>
      <ul className={classes.consonant}>
        <li className={classes.piece}>{shuffle[0].toUpperCase()}</li>
        <li className={classes.piece}>{shuffle[1].toUpperCase()}</li>
        <li className={classes.piece}>{shuffle[2].toUpperCase()}</li>
        <li className={classes.piece}>{shuffle[3].toUpperCase()}</li>
        <li className={classes.piece}>{shuffle[4].toUpperCase()}</li>
      </ul>
      <ul className={classes.consonant}>
        <li className={classes.piece}>{vShuffle[0].toUpperCase()}</li>
        <li className={classes.piece}>{vShuffle[1].toUpperCase()}</li>
        <li className={classes.piece}>{vShuffle[2].toUpperCase()}</li>

      </ul>
      <button className={classes.btn} type="button" onClick={() => (setShuffle(newTable) + vSetShuffle(vNewTable))}>Shuffle!</button>
    </div>
  );
}

export default Table;