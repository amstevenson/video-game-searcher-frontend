import React from 'react';
import './Game.css';

const game = (props) => (
    <article className="Game" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <div className="Info">
            <img className="image" src={props.screenshots[0].url}></img>
            <div className="Name">{props.summary}</div>
        </div>
    </article>
);

export default game;