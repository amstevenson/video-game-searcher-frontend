import React, { useEffect } from 'react';
import axios from '../../../axios';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

const one_game = (props) => {

    useEffect(() => {

        if (props.match.params.id) {
            const fetchData = async () => {

                // Get the data for the selected game
                const result = await axios(
                    '/games/' + props.match.params.id
                );

                console.log('[Games.js] status of code for getting one game is: ' + result.status)
                
                props.onUpdateSelectedGame(result.data.map(game => {
                    return <div key={game.id}>
                        {game.summary}
                    </div>
                }))
            }

            fetchData();
        }
        else console.log('[Game.js] No Id parameter was found. ');
    }, [] );

    return (
        <div>{props.selectedGame}</div>
    );
};

const mapStateToProps = state => {
    return {
        selectedGame: state.ogdr.selectedGame
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onUpdateSelectedGame: (selectedGame) => dispatch(actionCreators.update_selected_game(selectedGame))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (one_game);