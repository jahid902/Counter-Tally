import "./Counter.css"

const Counter = () => {

    


    return (
        <div className="counter">
    <h2 className="counter-name">Tally Counter</h2>
    <div className="input-container">
      <label htmlFor="counter-input"></label>
      <input type="number" id="counter-input" value="10"/>
    </div>
    <div className="buttons-container">
      <button id="plus-btn">Increase</button>
      <button id="minus-btn">Decrease</button>
    </div>
    <div className="settings-container">
      <button id="reset-btn">Reset Counter</button>
      <button id="start-value-btn">Set Start Value</button>
      <button id="counter-name-btn">Change Counter Name</button>
    </div>
    <div className="input-container">
      <label htmlFor="new-value-input"></label>
      <input type="text" id="new-value-input" value=""/>
    </div>
  </div>
    );
};

export default Counter;