import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ClassComponent from './components/types/Class';
import FunctionalComponent from './components/types/Functional';

const home ={
  lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu',
  lorem2: 'ur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad ',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div >
          <ClassComponent/>
          <FunctionalComponent lorem  = {home.lorem} lorem2= {home.lorem2}/>
        </div>
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
