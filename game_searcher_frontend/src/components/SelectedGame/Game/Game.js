import React, {Fragment} from 'react';
import './Game.css'
import ImageGallery from './ImageGallery/ImageGallery'

const selectedGame = (props) => {

    const firstReleaseDate = (typeof props.firstReleaseDate !== 'undefined') ? 
        props.firstReleaseDate : null;

    const summary = (typeof props.summary !== 'undefined') ? 
        props.summary : null;

    const averageRating = (typeof props.averageRating !== 'undefined') ? 
        props.averageRating : null;

    const url = (typeof props.url !== 'undefined') ? 
        props.url : null;

    const ratingCount = (typeof props.ratingCount !== 'undefined') ? 
        props.ratingCount : null;

    const rating = (typeof props.rating !== 'undefined') ? 
        Math.floor(props.rating).toPrecision(4) : null;

    /* Sizes of image are t_cover_big, t_original_ t_thumb */
    const screenshots = (typeof props.screenshots !== 'undefined') ? props.screenshots : null;

    return (
        <Fragment>
            {/* Sizes of image are t_cover_big, t_original_ t_thumb */}
            <section className="hero" 
                style={ screenshots ? 
                    {backgroundImage: "url( " + screenshots[0].url.replace("t_thumb", "t_original") + ")" } : {color: "black"}}>
                
                <div className="hero-inner">
                    <h1>{props.name}</h1>
                    <h2>{firstReleaseDate}</h2>
                </div>

            </section>

            <section className="gameDetails">
                <p><strong>Genre:</strong> {props.genres.join(', ')}</p>
                <p><strong>Rating: </strong>{rating}/100 {averageRating ? 
                    "(Average: " + averageRating + "/100 " + (ratingCount ? "out of " + ratingCount + " votes)" : ")") :
                        ""}</p>
                <p>{summary}</p>

                <a href={url}><button className="button blue large">More Details</button></a>
            </section>
            
            <ImageGallery screenshots={screenshots}/>

        </Fragment>
    );
};

export default selectedGame;