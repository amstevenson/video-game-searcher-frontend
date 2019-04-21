import React from 'react';
import './Game.css';

const game = (props) => {

    const firstReleaseDate = (typeof props.firstReleaseDate !== 'undefined') ? 
        <p>Released: {props.firstReleaseDate}</p> : null

    const rating = (typeof props.rating !== 'undefined') ? 
        <p>Rating: {Math.floor(props.rating).toPrecision(4)}</p> : null

    const screenshots = (typeof props.screenshots !== 'undefined') ? 
        <img className="image" src={props.screenshots[0].url}
             alt={props.screenshots[0].alt}></img> : null

    return <article className="Game" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <div className="Info">

                {screenshots}
                {firstReleaseDate}
                {rating}

                <div className="Summary">{props.summary}</div>
            </div>
        </article>
};

export default game;