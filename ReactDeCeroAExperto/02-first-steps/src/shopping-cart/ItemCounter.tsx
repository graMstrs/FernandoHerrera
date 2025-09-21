import { useState } from "react";
import './ItemCounter.css';

interface Props {
  item: string;
  quantity: number;
}

export const ItemCounter = ( { item, quantity = 0 } :Props)  => {
  const [count, setCount] = useState(quantity);
  
  const handleAdd = () => {
    setCount( count + 1 ); 
  }
  const handleRemove = () => {
    if ( count === 0 ) return;
    setCount( count - 1 ); 
  }

  const handleClick = () => {
    console.log(`Click ${item}`)
}

  return (
    <>  
      <section className="item-row" >
        
        <span className="item-text" 
              style={{ 
                color: count === 0 ? 'red' : 'black',
              }}
        >
          { item }
        </span>

        <button
          onClick= { handleAdd } 
        >
          +1
        </button>

        <span>{ count }</span>
        
        <button
          onClick= { handleRemove }
        >
          -1
        </button>

      </section>
    </>
  )
};
