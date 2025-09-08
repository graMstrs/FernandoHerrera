
function greet(name: string): string{
    return `Hola ${name}`
}

const greet2 = (name: string) => `Hola ${name}`



const message = greet('Gerardo');
const message2 = greet2('Armando');

console.log({message, message2})


interface User {
    uid: string;
    username: string;
}

function getUser():User {
    return {
        uid: 'ABC-123',
        username: 'gerardotavera'
    }
}

const getUser2 = ():User => (
    {
        uid: 'ABC-123',
        username: 'gerardotavera'
    }
)
    


const user = getUser();
const user2 = getUser2();

console.log({user, user2})


const myNumbers: number[] = [1,2,3,4,5]

// Funcion callback
// myNumbers.forEach(function(value){
//     console.log({value});
// })

//Funcion de flecha
// myNumbers.forEach((value) => {
//     console.log({value})
// })
//Funcion de flecha simplificada
myNumbers.forEach( console.log )
