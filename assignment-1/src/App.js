
import './App.css';
import Greeting  from './component/Greeting';
import Counter from './component/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
        <Greeting/>
        }
      </header>
      <Counter count="0"/>
    </div>
  );
}

export default App;
