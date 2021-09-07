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

    const startOver = (e) => {
        e.preventDefault()
        window.location.href ='/'; 
        }

    const handleOnSubmit = e => {
        e.preventDefault();

        ('.result').removeClass('hide');
        ('.result').addClass('show');
        
        // if (total >= 8 && total <= 13) {

        // } else if (total >= 14 && total <= 19) {

        // } else {

        // }

    };


 
    
    return (
        <>
            <section className="result">
                {resultsRendered}
                <button className="btn" onClick={startOver}>Start Over</button>
            </section>
        </>
    )
}
