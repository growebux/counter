 import logo from './logo.svg';
 import './App.css';


 //First create the div to hold the text(props.counter)
 //Second create the button and add the onclick, props.handle; add the props.counter and what will happen with this element a-b
 //Third create the module to pass the attribute to the handle and counter. counter={x} handle={x}
 //Forth create a const with useState to update the state
 //Needs to import the useState to change the value of the state.
 import {useState } from "react"
 
//Call a function and give a name, add the value (props) because it will pass information to a component.

function Counter(props) {
  return(
    <div>
      <h1>
        {props.counter}
      </h1>
      <button onClick={() => props.handle(props.counter + 1)}>Increment</button>
      <button onClick={() => props.handle(props.counter - 1)}>Decrement</button>
    </div>
  )
  
}
// Need to pass the attribute that you used props
// State will pass to two elements, 
//SetCountet is to update the variable counter

function App() {

const [counter, setCounter] = useState(2)

  return(
    //The letter X is the return when the handle is clicked.
    <div className="App">
      <Counter counter={counter} handle={(x) => setCounter(x)}/>
    </div>
  )
  
}

export default App;
