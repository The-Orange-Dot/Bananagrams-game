import {useState, useEffect} from 'react'
import classes from './timer.module.css'

function Timer () {
  const [count, setCount] = useState (0);
  useEffect(() => {
    if (count > 0 ) {
     setTimeout(() => {
      setCount((count) => count - 1);
    }, 1200);
  }})
  
  return (

    <div className={classes.container}>
 
      <div className={classes.timerDisplay}>
      <div className={classes.counter}>{count}</div>
      </div>
      <div className={classes.timerBtn}>
      <button type="button" className={classes.btn} onClick={() => setCount(60)}>1 Min</button>
      <button type="button" className={classes.btn} onClick={() => setCount(150)}>3 Min</button>
      <button type="button" className={classes.btn} onClick={() => setCount(300)}>5 Min</button>
      </div>
    </div>
    )
}

export default Timer;