import { CustomHeader } from './shared/components/CustomHeader';
import { GifsGallery } from './gifs/components/GifsGallery';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { SearchBar } from './shared/components/SearchBar';

import useGifs from './gifs/hooks/useGifs';

const GifsApp = () => {
  
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();
  

  return (
    <>
      {/* HEADER */}
      < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto :)" />

      {/* Search */}
      < SearchBar
        placeholder="Buscar gifs..."
        onQuery={handleSearch}
      />

      {/* Busquedas previas */}
      < PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked} />

      {/* Gifs */}
      < GifsGallery gifs={gifs} />

    </>
  );
};

export default GifsApp
