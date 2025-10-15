import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
    placeholder?: string;

    onQuery: (query: string) => void;

}

/*
Implementar la función handleSearch que debe:
Validar que el query no esté vacío
Convertir el query a minúsculas y eliminar espacios en blanco
Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms 
  ( si existe, no hacer nada )
Actualizar previousTerms agregando el nuevo término al inicio y limitando a 
  8 elementos máximo, es decir no puede ser un arreglo de más de 8.
*/


export const SearchBar = ({ placeholder = "Buscar", onQuery }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query)
        }, 700)

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery]);

    let searchHistory: string[] = [];

    const handleSearch = () => {
        onQuery(query);
        cleanSearchBar();
    }

    const cleanSearchBar = () => {
        setQuery('');
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => {
                    setQuery(event.target.value)
                }}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};