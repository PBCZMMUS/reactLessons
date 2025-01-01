import logo from './logo.svg';
import './App.css';

const nameChange = function(){
	const names = ["Mandalay", "Yangon", "Myanmar"];
	const name = Math.floor(Math.random() * 3);
	return names[name];
  }
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {nameChange()}!</p>
        <p>{new Date().getFullYear()}</p>
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
