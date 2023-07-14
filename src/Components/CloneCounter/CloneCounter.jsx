import { useRef, useState } from "react";
import "./CloneCounter.css";

const CloneCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Tally Counter");
  const [show, setShow] = useState(false);
  const [visibility, setVisibility] = useState(true);
  const [nameShow, setNameShow] = useState(false);
  const inputRef = useRef(null);
  const inputName = useRef(null);

  const changeCount = () => {
    setShow(!show);
    const inputValue = inputRef.current.value;
    const value = parseInt(inputValue);
    setCount(value);
  };

  const changeName = () => {
    setNameShow(!nameShow)
    const inputText = inputName.current.value;
    setName(inputText);
    
  }

  return (
    <>
    {visibility && <div className="counter">
      <h2 className="counter-name">{name}</h2>
      <div className="input-container">
        <label htmlFor="counter-input"></label>
        <input type="number" readOnly id="counter-input" value={count} />
      </div>
      <div className="buttons-container">
        <button onClick={() => setCount(count + 1)} id="plus-btn">
          Increase
        </button>
        <button disabled={count === 0} onClick={() => setCount(count - 1)} id="minus-btn">
          Decrease
        </button>
      </div>
      <div className="settings-container">
        <button disabled={count === 0}  onClick={() => setCount(0)} id="reset-btn">
          Reset Counter
        </button>
        <button onClick={() => setShow(!show)} id="start-value-btn">
          Set Start Value
        </button>
        <div className="buttons-container">
          <input  hidden={show ? false : true} ref={inputRef} type="number" id="new-value-input" />
          <button onClick={() => changeCount()} hidden={show ? false : true} className="button">Set</button>
        </div>
        <button onClick={() => setNameShow(!nameShow)} id="counter-name-btn">Change Counter Name</button>
      
      <div className="input-container">
      <div className="buttons-container">
        <input hidden={nameShow ? false : true} ref={inputName} type="text"  id="new-value-input" />
        <button onClick={() => changeName()} hidden={nameShow ? false : true} className="button">Set</button>
      </div>
      </div>
      <button onClick={()=> setVisibility(false)} className="button">Remove</button>
      </div>
    </div>}
    </>
  );
};

export default CloneCounter;
