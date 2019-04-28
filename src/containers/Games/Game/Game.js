import React, { useEffect } from 'react';
import axios from '../../../axios';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

import Game from '../../../components/SelectedGame/Game/Game'

const one_game = (props) => {

    useEffect(() => {

        if (props.match.params.id) {
            const fetchData = async () => {

                // Get the data for the selected game
                const result = await axios(
                    '/games/' + props.match.params.id
                );

                console.log('[Games.js] status of code for getting one game is: ' + result.status);
                
                props.onUpdateSelectedGame(result.data.map(game => {
                    return <Game key={game.id}
                        id={game.id} 
                        name={game.name}
                        averageRating={game.aggregated_rating}
                        genres={game.genre_names}
                        url={game.url}
                        ratingCount={game.rating_count}
                        rating={game.rating}
                        summary={game.summary}
                        firstReleaseDate={game.first_release_date_dmy}
                        screenshots={game.screenshot_info} />
                }));

                props.onUpdateSelectedGameId(props.match.params.id);
            }

            fetchData();
        }
        else console.log('[Game.js] No Id parameter was found. ');
    }, [] );

    // If no game has been collected, or if a new one is selected and react is loading the new data in
    const selectedGame = (!props.selectedGameId || props.selectedGameId !== props.match.params.id) ? 
        <p>Loading selected game...</p> : props.selectedGame

    return (
        selectedGame
    );
};

const mapStateToProps = state => {
    return {
        selectedGame: state.ogdr.selectedGame,
        selectedGameId: state.ogdr.selectedGameId
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onUpdateSelectedGame: (selectedGame) => dispatch(actionCreators.update_selected_game(selectedGame)),
        onUpdateSelectedGameId: (selectedGameId) => dispatch(actionCreators.update_selected_game_id(selectedGameId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (one_game);