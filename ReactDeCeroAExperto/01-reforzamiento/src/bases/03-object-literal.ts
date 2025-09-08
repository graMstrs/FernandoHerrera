interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address {
    postalCode: string;
    city: string;
}



const ironman: Person = {
    firstName: 'Gerardo',
    lastName: 'Tavera',
    age: 43,
    address: {
        postalCode: '12345',
        city: 'New York',
    }, 
}

const spiderman: Person = {
    firstName: "",
    lastName: "",
    age: 0,
    address: {
        postalCode: 'ABC-123',
        city: ""
    }
}


console.log(ironman);

// El operador spread solo funciona con el primer nivel de propiedades del objeto
// el segundo nivel de objeto anidado se copia por referencia
//  const spiderman = { ...ironman }

// Para crear un clon del objeto literl se utiliza la funcion
// structuredClone()
// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 23;

// console.log(spiderman);
// console.log(ironman);