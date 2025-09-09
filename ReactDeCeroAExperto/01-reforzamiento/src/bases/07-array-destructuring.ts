
const characterNames = ['Goku', 'Vegeta', 'Trunks', 'Bra']

//Las llaves cuadradas es para desestructurar arreglos

//Se asignan variables en el arreglo para hacer referencia al elemento en el arreglo
// dependinedo de la posicion de la variable creada es el elemento al q se le asignara la variable
// en caso de querer un elemento en especifico podemos usar una , ej conts [, p2] = characterNames 
const [, , p3] = characterNames;

console.log({ p3 })


// al usar el 'as const' en el return estamos asignando un tipado estricto al return
// asi q el primer elemento siempre sera un string y el segundo un numero.
const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [ letras, numeros ] = returnsArrayFn()

console.log({ letras, numeros })


// Tarea:
const useState = (value: string ) => {
    return [
        value, 
        (newValue: string) => {
        console.log(newValue) ;
    }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Eloisa')



