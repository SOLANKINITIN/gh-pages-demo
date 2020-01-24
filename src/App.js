import React from 'react';
import { bounce } from 'react-animations';
import Garmi from './img/maxresdefault.jpg'
import God from './img/WhatsApp_Image_2020-01-23_at_9-removebg-preview (1).png'
import './App.css';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s infinite',
    animationName: Radium.keyframes(bounce, 'bounce'),
    position: 'absolute',
    height: '22vh',
    left: '27vw',
    top: '43vh',
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
      </header>
    </div>
  );
}

export default App;
