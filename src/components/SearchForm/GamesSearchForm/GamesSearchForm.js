import React from 'react';
import './GamesSearchForm.css'

const gamesSearchForm = (props) => (
    <form className="searchForm">

        <input className="searchBox" type="date" name="date after"
               placeholder="Games after: " onChange={props.updateAfterDateValueEvent} />       

        <select className="searchBox" name="genre_list" defaultValue="12" 
                        onChange={props.updateGenreValueEvent} >
            {props.genreList}
        </select>

        <select className="searchBox" name="rating" defaultValue="70" 
                onChange={props.updateRatingValueEvent}>
            <option value="20">Rating: More than 20</option>
            <option value="30">Rating: More than 30</option>
            <option value="40">Rating: More than 40</option>
            <option value="50">Rating: More than 50</option>
            <option value="60">Rating: More than 60</option>
            <option value="70">Rating: More than 70</option>
            <option value="80">Rating: More than 80</option>
            <option value="90">Rating: More than 90</option>
        </select>

        <input className="searchBox" name="offset" type="text" placeholder="Enter page number..." 
            onChange={props.updateOffsetValueEvent}/> {/* Pages are in multiples of 8 */}
        
        <input className="searchButton" type="button" value="Search" onClick={props.updateGamesEvent}/>

    </form>
)

export default gamesSearchForm;