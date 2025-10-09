interface SearchBarProps{

}

export const SearchBar = () => {
    return (
       <div className="search-container">
            <input type="text" placeholder='Buscar gifs...' />
            <button>Search</button>
        </div>
    );
};