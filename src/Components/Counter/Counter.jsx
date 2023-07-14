import { useRef, useState } from "react";
import "./Counter.css";
import CloneCounter from "../CloneCounter/CloneCounter";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Tally Counter");
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [nameShow, setNameShow] = useState(false);
  const inputRef = useRef(null);
  const inputName = useRef(null);

  const countChange = () => {
    setShow(!show);
    const inputValue = inputRef.current.value;
    const value = parseInt(inputValue);
    setCount(value);
  };

  const nameChange = () => {
    setNameShow(!nameShow)
    const inputText = inputName.current.value;
    setName(inputText);
    
  }

  return (
    <div id="main-container">
    <div className="counter">
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
          <button onClick={() => countChange()} hidden={show ? false : true} className="button">Set</button>
        </div>
        <button onClick={() => setNameShow(!nameShow)} id="counter-name-btn">Change Counter Name</button>
      
      <div className="input-container">
      <div className="buttons-container">
        <input hidden={nameShow ? false : true} ref={inputName} type="text"  id="new-value-input" />
        <button onClick={() => nameChange()} hidden={nameShow ? false : true} className="button">Set</button>
      </div>
      </div>
      </div>
      <button disabled={add === true} onClick={()=> setAdd(!add)} className="button-2">Add Another</button>
    </div>
    {
      add && <CloneCounter setAdd={setAdd}></CloneCounter>
    }
    </div>
  );
};

export default Counter;
