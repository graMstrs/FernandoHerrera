import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>  
            <h1>Carrito de compras</h1>

            <ItemCounter 
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
            />
        </>
    )
}