import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";

interface GifGalleryProps {
   gifs: Gif[];
}

export const GifsGallery: FC<GifGalleryProps> = ({ gifs }) => {
    return (
        <div className='gif-container'>
            {
                gifs.map( (gif) => (
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
    );
}
