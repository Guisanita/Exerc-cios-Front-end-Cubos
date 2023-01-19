import './App.css';
import { useRef } from 'react';

//Daniel - fontsize=30px cor vermelha / 
//João - fontsize=60px cor verde /
// Pedro - fontsize=90px cor azul

function App3() {
  const strongNameRedRef = useRef(null);
  const strongNameGreenRef = useRef(null);
  const strongNameBlueRef = useRef(null);

  function handleClickRed() {
    strongNameRedRef.current.style.color = 'red';
    strongNameRedRef.current.style.fontSize = '30px';
  }

  function handleClickGreen() {
    strongNameGreenRef.current.style.color = 'green';
    strongNameGreenRef.current.style.fontSize = '60px';
  }

  function handleClickBlue() {
    strongNameBlueRef.current.style.color = 'blue';
    strongNameBlueRef.current.style.fontSize = '90px';
  }

  return (
    <div className="App">
      <strong onClick={() => handleClickRed()}
        ref={strongNameRedRef}
      >Daniel</strong>
      <strong onClick={() => handleClickGreen()}
        ref={strongNameGreenRef}
      >João</strong>
      <strong onClick={() => handleClickBlue()}
        ref={strongNameBlueRef}
      >Pedro</strong>
    </div>
  );
}

export default App3;
