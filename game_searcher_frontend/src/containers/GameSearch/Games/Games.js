import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import './Games.css'
import Game from '../../../components/Game/Game'
import GameSearchForm from '../../../components/SearchForm/GamesSearchForm/GamesSearchForm'

const games = (props) => {

    const [games, setGames] = useState({
        games: []
    }); 
    const [genres, setGenres] = useState({
        genres: []
    });
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [rating, setRating] = useState(70);
    const [refresh, setRefresh] = useState(false);
    const [genre, setGenre] = useState(0);
    
    // Get all Genres
    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(
            '/games/genres'
            );

            console.log('[Games.js] status of code for all genres is: ' + result.status)

            setGenres(result.data);
        };
    
        fetchData();

    }, [] ); // We only want this to be called on load

    // Get all Games
    useEffect(() => {   
        const fetchData = async () => {

            const result = await axios(
            '/games/' + offset + '/' + rating + '/' + genre,
            );
            
            console.log('[Games.js] Rating is: ' + rating + ' and offset is: ' + offset)
            console.log('[Games.js] status of code for all games is: ' + result.status)

            setGames(result.data);
            setLoading(false) 
        };
    
        fetchData();

    }, [refresh] ); // second param prevents second render on launch
                    // In this case, it only updates when the refresh state changes
    
    const updateGameSearchEventHandler = () => {
        setRefresh(true);
    }

    const updateOffsetValueEventHandler = (propsOffsetValue) => {
        setOffset(propsOffsetValue * 8);
        setRefresh(false);
    }

    const updateRatingValueEventHandler = (propsRatingValue) => {
        setRating(propsRatingValue);
        setRefresh(false);
    } 

    const updateGenreValueEventHandler = (propsGenreValue) => {
        setGenre(propsGenreValue);
        setRefresh(false);
    } 

    let gamesList = <p style={{textAlign: 'center'}}>Loading games...</p>;
    let genreList = null;
    if (!loading) {

        gamesList = games.map(game => {
            return <Game
                key={game.id}
                name={game.name}
                summary={game.summary}
                screenshots={game.screenshot_info}
                firstReleaseDate={game.first_release_date_dmy}
                rating={game.rating}
                ratingCount={game.rating_count}>
            </Game>
        });

        genreList = genres.map(genre => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>
        });
    }
    
    return (
        <div>
            <GameSearchForm 
                updateOffsetValueEvent={(e) => updateOffsetValueEventHandler(e.target.value)} 
                updateRatingValueEvent={(e) => updateRatingValueEventHandler(e.target.value)}
                updateGamesEvent={() => updateGameSearchEventHandler()}
                updateGenreValueEvent={(e) => updateGenreValueEventHandler(e.target.value)}
                genreList = {genreList} />
            <section className="Games">
                {gamesList}
            </section>
            {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} />  */}
        </div>
    );
}

export default games;