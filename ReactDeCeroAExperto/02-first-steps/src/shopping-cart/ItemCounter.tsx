interface Props {
  item: string;
  quantity: number;
}

export const ItemCounter = ( { item, quantity } :Props)  => {
  return (
    <>  
      <section style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem', 
          marginTop: '10px',
        }}
      >
        <span style={{ 
          width: '150px', 
          }}
        >
          { item }
        </span>

        <button>+1</button>
        <span>{ quantity }</span>
        <button>-1</button>

      </section>
    </>
  )
};
