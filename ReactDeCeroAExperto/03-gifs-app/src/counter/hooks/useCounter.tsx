import { useState } from "react";

export const useCounter = (initialValue: number = 10 ) => {
    
    const [counter, setCounter] = useState(initialValue);
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        if (counter === 0) return;
        setCounter( (prevState) => prevState- 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    return {
        // Properties
        counter,
        // Methods / Actions
        handleAdd,
        handleSubstract,
        handleReset
    };
}