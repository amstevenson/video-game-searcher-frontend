import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import './Games.css'
import Game from '../../../components/Game/Game'
import GameSearchForm from '../../../components/SearchForm/GamesSearchForm/GamesSearchForm'

const games = (props) => {

    const [data, setData] = useState({
        games: []
    }); 
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [rating, setRating] = useState(0);
    
    useEffect(() => {   
        const fetchData = async () => {

            const result = await axios(
            '/games/' + offset + '/70',
            );
            
            console.log('[Games.js] status of code for all games is: ' + result.status)

            setData(result.data);
            setLoading(false)

            console.log('[Games.js] no error found, showing list of games')

            console.log(data)    
        };
    
        fetchData();

    }, [offset, rating] ); // second param prevents second render on launch
                           // In this case, it only updates when the offset/rating state changes
    
    const updateGameSearchEventHandler = () => {

        console.log('Triggering refresh of games with offset: ' + offsetValue)
        setOffset(offsetValue);
    }

    const updateOffsetValue = (propsOffsetValue) => {

        console.log('updating offset value with : ' + propsOffsetValue)

        offsetValue = propsOffsetValue
    }

    let games = <p style={{textAlign: 'center'}}>Loading games...</p>;
    if (!loading) {

        games = data.map(game => {
            return <Game
                key={game.id}
                name={game.name}
                summary={game.summary}
                screenshots={game.screenshot_info}
                firstReleaseDate={game.first_release_date_dmy}
                rating={game.rating}
                ratingCount={game.rating_count}>
            </Game>
        })
    }
    
    let offsetValue = 0;

    return (
        <div>
            <GameSearchForm 
                updateOffsetValueEvent={(e) => updateOffsetValue(e.target.value)} 
                updateGamesEvent={() => updateGameSearchEventHandler()}/>
            <section className="Games">
                {games}
            </section>
            {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} />  */}
        </div>
    );

}

export default games;