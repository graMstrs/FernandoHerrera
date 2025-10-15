import type { FC } from "react";


interface PreviousSearchesProps {
    searches: string[];

    onLabelCLick: (term: string) => void;
}


export const PreviousSearches: FC<PreviousSearchesProps> = ({ searches, onLabelCLick }) => {
    return (
        <div className="previous-searches">
            <h2> Busquedas previas </h2>
            <ul className="previous-searches-list">
                {searches.map(term => (
                    <li key={term}
                        onClick={() => onLabelCLick(term)}
                    >
                        {term}
                    </li>
                ))}
            </ul>
        </div>
    );
};