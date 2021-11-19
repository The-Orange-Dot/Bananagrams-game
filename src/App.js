import Timer from './components/timer';
import classes from './App.module.css';
import Table from './components/table';

function App() {
  return (
    <section className={classes.container}>
    
    <h1 className={classes.title}>Bananagrams!</h1>
    <div>
      <Table />
    </div>
    <div className={classes.timer}>
      <Timer />
    </div>
    </section>
  );
}

export default App;
