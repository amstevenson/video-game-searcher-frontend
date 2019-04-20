import React from 'react';
import './Game.css';

const game = (props) => (
    <article className="Game" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <div className="Info">
            <div className="Name">{props.summary}</div>
        </div>
    </article>
);

export default game;