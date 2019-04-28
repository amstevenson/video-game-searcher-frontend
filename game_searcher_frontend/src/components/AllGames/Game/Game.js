import React from 'react';
import './Game.css';

const game = (props) => {

    /* Sizes of image are t_cover_big, t_original_ t_thumb */
    const screenshots = (typeof props.screenshots !== 'undefined') ? 
        <img className="image" src={props.screenshots[0].url.replace("t_thumb", "t_cover_big")}
             alt={props.screenshots[0].alt} /> : null

    return <article className="Game" onClick={props.clicked}>
            <h1>{props.name} ({props.firstReleaseDate})</h1>
                {screenshots}
        </article>
};

export default game;