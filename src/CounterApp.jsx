import {useState} from 'react';


export const CounterApp = ({value}) => {
  if(!value){
    value = 0;
  }

  const [counter, setCounter] = useState(value);

  const buttonAdd = () => {
    // console.log(event);
    setCounter(counter + 1);  
  }
  const buttonLess = () => {
    // console.log(event);
    setCounter(counter - 1);  
  }
  const buttonReset = () => {
    // console.log(event);
    setCounter(value);  
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={buttonAdd}>
        +1
      </button>
      <button onClick={buttonLess}>
        -1
      </button>
      <button aria-label='btn-reset' onClick={buttonReset}>
        Reset
      </button>
    </>
  );
}
