import {Input} from "./components/Input.tsx"
import {Display} from "./components/Display.tsx"
import './App.css'
import { useEffect, useState } from 'react'

const maxNumber = 1000;

function App() {
  const [num, setNum] = useState(0);
  const [lowerOrHigher, setLowerOrHigher] = useState ("");
  const [randomNum, setRandomNum] = useState(0);
  const [done, setDone] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 10 + 1));
  }, []);

  return (
    <>
      {!done &&
        <div>
          <Display lowerOrHigher={lowerOrHigher} />
          <p>Uhopdni číslo od 1 do {maxNumber}</p>
          <Input setValue={setNum} setDone={setDone} setAttempts={setAttempts} hidden={randomNum} num={num} setHighOrLow={setLowerOrHigher} />
        </div>
        ||
        <div>
          <p>Uhádl jsi číslo na {attempts} pokusů!</p>
          <button onClick={() => {
            setDone(false);
            setRandomNum(Math.floor(Math.random() * maxNumber));
            setAttempts(0);
            setLowerOrHigher("");
          }}>Začít znovu</button>
        </div>
      }
    </>
  )
}

export default App
