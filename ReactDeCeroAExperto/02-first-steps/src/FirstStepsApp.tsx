import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] =
    [
        { 
            productName: 'Nintendo switch 2', 
            quantity: 1
        },
        { 
            productName: 'Pro controller', 
            quantity: 4 
        },
        { 
            productName: 'Smash Bros', 
            quantity: 3 
        },
    ];

export function FirstStepsApp() {
    return (
        <>  
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map( ({productName, quantity }) => (
                    <ItemCounter key={ productName } item={ productName } quantity={ quantity } />
                ))
            }

            
            { /*<ItemCounter 
                item="Nintendo switch 2" 
                quantity={1}
            />
            <ItemCounter 
                item="Pro controller" 
                quantity={4}
            />
            <ItemCounter 
                item="Smash Bros" 
                quantity={1}
            />*/ }
            
        </>
    )
}