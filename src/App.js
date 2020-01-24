import React from 'react';
import { bounce } from 'react-animations';
import Garmi from './img/maxresdefault.jpg'
import God from './img/main god.jpg'
import './App.css';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s infinite',
    animationName: Radium.keyframes(bounce, 'bounce'),
    position: 'absolute',
    left: '32vw',
    top: '32vh',
    borderRadius: '100%',
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StyleRoot>
       <img className='nora' src={Garmi}  alt="logo" /> 
       <img style={styles.bounce} src={God}  alt="logo" /> 
       </StyleRoot>
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
