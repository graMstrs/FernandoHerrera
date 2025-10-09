import React from 'react'
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './shared/components/PreviousSearches';

const GifsApp = () => {
  return (
    <>
        {/* HEADER */}
        < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto :)"/>

       {/* Search */} 
        < SearchBar />

        {/* Busquedas previas */}
        < PreviousSearches />

        {/* Gifs */}
        <div className='gif-container'>
            {
                mockGifs.map( (gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3> {gif.title}</h3>
                        <p>
                            { gif.width} x {gif.height} ( 1.5MB )
                        </p>
                    </div>
                ))
            }        
        </div>

    </>
  );
};

export default GifsApp
