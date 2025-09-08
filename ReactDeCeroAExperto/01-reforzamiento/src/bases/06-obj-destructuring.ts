interface Hero  {
    name: string,
    age: number,
    key: string,
    rank?: string,
}

const person = {
    name: 'Gerardo',
    age: 43,
    key: 'ironman'
}

// const name = person.name
// const age = person.age
// const key = person.key

const { age,key,name: ironManName} = person;


console.log( { ironManName, age, key } )


const useContext = ({key, name, age, rank}: Hero ) => {
    return {
        keyname: key,
        user: {
            name: name,
            age: age, 
        },
        rank: rank,
    }
}

const {
    keyname,
    rank, 
    user,
} = useContext(person)


const { name } = user;



console.log({ rank, keyname, name })