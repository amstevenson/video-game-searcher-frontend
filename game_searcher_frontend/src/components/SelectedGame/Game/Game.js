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

    const imageGallery = props.screenshots.map((screenshot, index) => {

        // index is indexed, starts at 0
        // length is not indexed, starts at 1

        return <Fragment key={screenshot.id}>
            <input type="radio" name="radio-btn" id={screenshot.id} checked />
            <li class="slide-container">
                <div class="slide">
                        <img src={screenshot.url.replace("t_thumb", "t_original")} />
                </div>
                <div class="slideNav">
                    <label for="img-6" class="prev">&#x2039;</label>
                    <label for="img-2" class="next">&#x203a;</label>
                </div>
            </li>
        </Fragment>
    });


    // <ul class="slides">
    //     <input type="radio" name="radio-btn" id="img-1" checked />
    //     <li class="slide-container">
    //         <div class="slide">
    //             <img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" />
    //         </div>
    //         <div class="nav">
    //             <label for="img-6" class="prev">&#x2039;</label>
    //             <label for="img-2" class="next">&#x203a;</label>
    //         </div>
    //     </li>

    //     <input type="radio" name="radio-btn" id="img-2" />
    //     <li class="slide-container">
    //         <div class="slide">
    //         <img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" />
    //         </div>
    //         <div class="nav">
    //             <label for="img-1" class="prev">&#x2039;</label>
    //             <label for="img-3" class="next">&#x203a;</label>
    //         </div>
    //     </li>

    //     <input type="radio" name="radio-btn" id="img-3" />
    //     <li class="slide-container">
    //         <div class="slide">
    //         <img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" />
    //         </div>
    //         <div class="nav">
    //             <label for="img-2" class="prev">&#x2039;</label>
    //             <label for="img-4" class="next">&#x203a;</label>
    //         </div>
    //     </li>

    //     <input type="radio" name="radio-btn" id="img-4" />
    //     <li class="slide-container">
    //         <div class="slide">
    //         <img src="http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg" />
    //         </div>
    //         <div class="nav">
    //             <label for="img-3" class="prev">&#x2039;</label>
    //             <label for="img-5" class="next">&#x203a;</label>
    //         </div>
    //     </li>

    //     <input type="radio" name="radio-btn" id="img-5" />
    //     <li class="slide-container">
    //         <div class="slide">
    //         <img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" />
    //         </div>
    //         <div class="nav">
    //             <label for="img-4" class="prev">&#x2039;</label>
    //             <label for="img-6" class="next">&#x203a;</label>
    //         </div>
    //     </li>

    //     <input type="radio" name="radio-btn" id="img-6" />
    //     <li class="slide-container">
    //         <div class="slide">
    //         <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" />
    //         </div>
    //         <div class="nav">
    //             <label for="img-5" class="prev">&#x2039;</label>
    //             <label for="img-1" class="next">&#x203a;</label>
    //         </div>
    //     </li>

    //     <li class="nav-dots">
    //     <label for="img-1" class="nav-dot" id="img-dot-1"></label>
    //     <label for="img-2" class="nav-dot" id="img-dot-2"></label>
    //     <label for="img-3" class="nav-dot" id="img-dot-3"></label>
    //     <label for="img-4" class="nav-dot" id="img-dot-4"></label>
    //     <label for="img-5" class="nav-dot" id="img-dot-5"></label>
    //     <label for="img-6" class="nav-dot" id="img-dot-6"></label>
    //     </li>
    // </ul>

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