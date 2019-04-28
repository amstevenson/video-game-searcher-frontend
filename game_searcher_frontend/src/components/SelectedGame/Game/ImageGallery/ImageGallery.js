import React, {Fragment} from 'react';
import './ImageGallery.css'

const imageGallery = (props) => {

    const imageGalleryPictures = props.screenshots ? props.screenshots.map((screenshot, index) => {

        const imageIndex = (index+1);

        return <Fragment key={screenshot.id}>

            {imageIndex === 1 ? <input type="radio" name="radio-btn" id={"img-" + imageIndex } defaultChecked /> : 
                <input type="radio" name="radio-btn" id={"img-" + imageIndex } /> }

            <li className="slide-container">
                <div className="slide">
                        <img src={screenshot.url.replace("t_thumb", "t_original")}
                            alt={screenshot.alt} />
                </div>
                <div className="slideNav">
                    <label htmlFor={imageIndex === 1 ? 
                        "img-" + props.screenshots.length : "img-" + (imageIndex - 1)} className="prev">&#x2039;</label>

                    <label htmlFor={imageIndex === props.screenshots.length ?
                        "img-1" : "img-" + (imageIndex + 1)} className="next">&#x203a;</label>
                </div>
            </li>
        </Fragment>
    }) : null;

    const imageGalleryDots = props.screenshots ? props.screenshots.map((screenshot, index) => {
        
        const imageIndex = (index+1)

        return <label htmlFor={"img-" + imageIndex} 
            className="slideNav-dot" 
            id={"img-dot-" + imageIndex}
            key={screenshot.id}></label>
           
    }) : null;

    const imageGallery = props.screenshots ? <ul className="slides">
    
        {imageGalleryPictures}

        <li className="slideNav-dots">
            {imageGalleryDots}
        </li>

    </ul> : null

    return (
        <div className="slideWrapper">
            {imageGallery}
        </div>
    );
};

export default imageGallery;