import React from 'react';
import './Game.css';

const game = (props) => {

    const screenshots = (typeof props.screenshots !== 'undefined') ? 
        <img className="image" src={props.screenshots[0].url}
             alt={props.screenshots[0].alt}></img> : null

    return <article className="Game" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <div className="Info">

                {screenshots}

                <div className="Name">{props.summary}</div>
            </div>
        </article>
};

export default game;