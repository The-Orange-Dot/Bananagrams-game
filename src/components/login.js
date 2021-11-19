import classes from './login.module.css'
import {Route, Routes} from 'react-router-dom'

function Login (props) {

  function submitHandler () {
    props.onSubmit();
  }
  
  return(
  <div className={classes.login}>
      <div className={classes.background}> 
        <form>
          <div>
            <h1 className={classes.loginText}>Login</h1>
            <p className={classes.p}>Theres no database :( </p>
          </div>
          <div>
            <label htmlFor="username">Username: </label>
          </div>
          <div>
            <input type="text" id="username" required/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
          </div>
          <div>
            <input type="password" id="password" required/>
          </div>
          <div className={classes.submit}>
            <button onClick={submitHandler}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;