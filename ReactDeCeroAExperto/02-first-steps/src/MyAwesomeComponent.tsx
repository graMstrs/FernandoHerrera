import { useState, type CSSProperties } from "react";
export function MyAwesomeComponent() {

    const [isActive, setIsActive] = useState(false)
    const firstName = 'Gerardo';
    const lastName = 'Tavera';

    const favoriteGames = ['Elden Ring', 'Zelda', 'Doom'];

    const toggleIsActive = () => {
        setIsActive (!isActive)
    }

    const address = {
        zipCode: 'ABC-123',
        street: 'Main Stree 123',
        country: 'Canada'
    }

    const addressStyle: CSSProperties = {
        backgroundColor: isActive ? 'green' : 'blue', 
        borderRadius: '10px',
        padding: 10, 
        marginTop: 30,
    }

    return (
        <div> 
            <h1 data-testid="first-name-title"> {firstName} </h1>
            <h3 > {lastName} </h3>

            <p className="mi-clase-favorita"> {favoriteGames.join(', ')} </p>
            <p> {2 + 2 }</p>

            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <button style={{  height: '30px', width: '100px' }} 
                    onClick={ toggleIsActive}> 
                    { isActive? 'Desactivar' : 'Activar' } 
            </button>

            <p style={ addressStyle }>
                { JSON.stringify(address) }
            </p>
        </div>
    )
}