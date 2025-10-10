import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifsGallery } from './gifs/components/GifsGallery';
import { mockGifs } from './mock-data/gifs.mock';

const GifsApp = () => {
  return (
    <>
        {/* HEADER */}
        < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto :)"/>

       {/* Search */} 
        < SearchBar placeholder = "Buscar gifs..." />

        {/* Busquedas previas */}
        < PreviousSearches searches={['Goku', 'Naruto', 'Rick',]}/>

        {/* Gifs */}
        < GifsGallery gifs={ mockGifs } />

    </>
  );
};

export default GifsApp
