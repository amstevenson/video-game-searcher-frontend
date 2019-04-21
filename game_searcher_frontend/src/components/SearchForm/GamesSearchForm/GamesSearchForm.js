import React from 'react';
import './GamesSearchForm.css'

const gamesSearchForm = (props) => (
    <form className="searchForm">

    <select className="searchBox" name="Icecream Flavours" defaultValue="70">
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