import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import './Games.css'
import Game from '../../../components/Game'

const games = (props) => {

    const [data, setData] = useState({
        games: []
    }); 
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    
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

    }, [offset] ); // second param prevents second render on launch
                   // In this case, it only updates when the offset state changes
    
    const updateGameSearchEventHandler = (offset) => {

        console.log('Triggering refresh of games with offset: ' + offset)
        setOffset(offsetValue);
    }

    let games = <p style={{textAlign: 'center'}}>Loading games...</p>;
    if (!loading) {

        games = data.map(game => {
            return <Game
                key={game.id}
                name={game.name}
                summary={game.summary}
                screenshots={game.screenshot_info}>
            </Game>
        })
    }

    let offsetValue = 0;

    return (
        <div>
            <form className="searchForm">
                <input className="searchBox" name="offset" type="text" placeholder="Enter page number..." 
                       onChange={(e) => offsetValue = (e.target.value * 8)}/> {/* Pages are in multiples of 8 */}
                <input className="searchButton" type="button" value="Search" onClick={() => updateGameSearchEventHandler(offsetValue)}/>
            </form>
            <section className="Games">
                {games}
            </section>
            {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} />  */}
        </div>
    );

}

export default games;