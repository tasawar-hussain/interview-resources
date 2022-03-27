import logo from './logo.svg';
import './App.css';

function App() {

  incrementAge() {
    this.setState({
        age:this.state.age + 1;
    });

    if(this.state.age === 18) {
        alert("Congrats, you have made it");
     }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
