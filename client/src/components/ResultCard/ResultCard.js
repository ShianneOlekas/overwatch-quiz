import React from 'react';

import './ResultCard.scss';

export default function ResultCard({ results }) {
    const resultsRendered = results?.map((result) => (
        <div key={result.id}>
            <img src={result.image} alt={result.role + ' header image'} className="result__img" />
            <h2 className="result__header">Your role is {result.role}!</h2>
            <p className="result__p">{result.result}</p>
        </div>
    ))
    
    return (
        <>
            <section className="result">
                {resultsRendered}
            </section>

        </>
    )
}
