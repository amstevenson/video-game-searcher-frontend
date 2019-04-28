import React, {Fragment} from 'react';
import './Game.css'

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

    const imageGalleryPictures = props.screenshots.map((screenshot, index) => {

        const imageIndex = (index+1);

        return <Fragment key={screenshot.id}>

            {imageIndex === 1 ? <input type="radio" name="radio-btn" id={"img-" + imageIndex } defaultChecked /> : 
                <input type="radio" name="radio-btn" id={"img-" + imageIndex } /> }

            <li className="slide-container">
                <div className="slide">
                        <img src={screenshot.url.replace("t_thumb", "t_original")} />
                </div>
                <div className="slideNav">
                    <label for={imageIndex === 1 ? 
                        "img-" + props.screenshots.length : "img-" + (imageIndex - 1)} className="prev">&#x2039;</label>

                    <label for={imageIndex === props.screenshots.length ?
                        "img-1" : "img-" + (imageIndex + 1)} className="next">&#x203a;</label>
                </div>
            </li>
        </Fragment>
    });

    const imageGalleryDots = props.screenshots.map((screenshot, index) => {
        
        const imageIndex = (index+1)

        return <label for={"img-" + imageIndex} className="slideNav-dot" id={"img-dot-" + imageIndex}></label>
           
    });

    const imageGallery = screenshots ? <ul className="slides">
    
        {imageGalleryPictures}

        <li className="slideNav-dots">
            {imageGalleryDots}
        </li>

    </ul> : null

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
                <p><strong>Rating: </strong>{rating}/100 {averageRating ? "( Average: " + averageRating + "/100 " + ")": ""}</p>
                <p>{summary}</p>

                <a href={url}><button className="button blue large">More Details</button></a>
            </section>
            
            {imageGallery}

        </Fragment>
    );
};

export default selectedGame;