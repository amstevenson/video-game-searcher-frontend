import React, {useEffect} from 'react';
import axios from '../../../axios';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

import './Games.css'
import Game from '../../../components/Game/Game'
import GameSearchForm from '../../../components/SearchForm/GamesSearchForm/GamesSearchForm'

const games = (props) => {

    useEffect(() => {
        const fetchData = async () => {

            // Get all genres and construct a list
            const result = await axios(
                '/games/genres'
            );

            console.log('[Games.js] status of code for all genres is: ' + result.status)
            
            props.onUpdateGenreList(result.data.map(genre => {
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })) // update the list of genres
        };
    
        fetchData();

    }, [] );

    useEffect(() => {   
        const fetchData = async () => {

            // Get all games based on search parameters and construct a list
            console.log('[Games.js] Rating is: ' + props.rating + ', offset is: ' + props.offset + 
                        ', genre is: ' + props.genre + ', after date is: ' + props.afterDate)

            const result = await axios(
                '/games/' + props.offset + '/' + props.rating + '/' + props.genre + '/' + props.afterDate,
            );
            
            console.log('[Games.js] status of code for all games is: ' + result.status)
            
            // Set the list of games
            props.onUpdateGameList(result.data.map(game => {
                return <Game
                    key={game.id}
                    name={game.name}
                    summary={game.summary}
                    screenshots={game.screenshot_info}
                    firstReleaseDate={game.first_release_date_dmy}
                    rating={game.rating}
                    ratingCount={game.rating_count}>
                </Game>
            }));

            props.onSetGamesLoading(false); // remove the label related to loading the game data
        };
    
        fetchData();

    }, [props.searchToggle] ); 
    
    // If the game list is loading, set a loading message, else show the list of games
    let gamesList = props.loading ? <p style={{textAlign: 'center'}}>Loading games...</p> :
        props.gameList
 
    return (
        <div>
            <GameSearchForm 
                updateOffsetValueEvent={(e) => props.onChangeOffset(e.target.value)} 
                updateRatingValueEvent={(e) => props.onChangeRating(e.target.value)}
                updateAfterDateValueEvent={(e) => props.onChangeAfterDate(e.target.value)}
                updateGamesEvent={() => props.onToggleSearch(props.searchToggle)}
                updateGenreValueEvent={(e) => props.onChangeGenre(e.target.value)}
                genreList = {props.genreList} />
            <section className="Games">
                {gamesList}
            </section>
            {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} />  */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        genre: state.gdr.genre,
        offset: state.gdr.offset,
        gamesLoading: state.gdr.gamesLoading,
        rating: state.gdr.rating,
        searchToggle: state.gdr.searchToggle,
        afterDate: state.gdr.afterDate,
        genreList: state.gdr.genreList,
        gameList: state.gdr.gameList
    }
};

const mapDispatchToProps = dispatch => {

    return {
        onChangeGenre: (genre) => dispatch(actionCreators.add_genre(genre)),
        onChangeOffset: (offset) => dispatch(actionCreators.update_offset(offset)),
        onSetGamesLoading: (gamesLoading) => dispatch(actionCreators.update_games_loading(gamesLoading)),
        onChangeRating: (rating) => dispatch(actionCreators.update_rating(rating)),
        onToggleSearch: (toggleSearch) => dispatch(actionCreators.update_search_toggle(toggleSearch)),
        onChangeAfterDate: (afterDate) => dispatch(actionCreators.update_after_date(afterDate)),
        onUpdateGenreList: (genreList) => dispatch(actionCreators.update_genre_list(genreList)),
        onUpdateGameList: (gameList) => dispatch(actionCreators.update_game_list(gameList))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (games);