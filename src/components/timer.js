import {useState, useEffect} from 'react'
import classes from './timer.module.css'

function Timer () {
  const [count, setCount] = useState (300);
  useEffect(() => {
    if (count > 0 ) {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1200);
  }})
  
  return (
    <div className={classes.container}>
    <div className={classes.counter}>{count}</div>
    </div>
    )
}

export default Timer;