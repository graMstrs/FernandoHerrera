import { useState } from "react";

export const MyCounterApp = () => {

const handleAdd = () => {
    setCounter(counter + 1);
}

const handleSubstract = () => {
    setCounter(counter - 1);
}

const handleReset = () => {
    setCounter(0);
}


    const [counter, setCounter] = useState(5);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '40px' }}>
        <h1> Counter: { counter } </h1>

        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    </div>
  )
}
