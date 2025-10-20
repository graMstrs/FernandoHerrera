import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifsGallery } from './gifs/components/GifsGallery';
import { mockGifs } from './mock-data/gifs.mock';
import { useState } from 'react';

import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  }

  const handleSearch = async (query: string) => { 
    query = query.trim().toLowerCase()
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].splice(0, 5));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  
  }

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
