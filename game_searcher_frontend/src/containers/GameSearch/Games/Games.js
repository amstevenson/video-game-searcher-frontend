import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import './Games.css'
import Game from '../../../components/Game'

const games = (props) => {

    const [data, setData] = useState({
        games: []
    }); 
    const [error, setError] = useState(true);
    
    // useEffect( () => {

        // axios.get('/games/0/70') // Offset of 0, will need to ammend later to feed in the right one
        //     .then( response => {
                
        //         const updatedGames = response.data.map(updatedGame => {
        //             return {
        //                 ...updatedGame
        //             }
        //         })

        //         console.log(updatedGames)
                
        //         // setData(updatedGames)

        //         // return updatedGames
        //     }, [setData(null)])
        //     .catch(error => {
        //         console.log('[Games.js] ' + error);
        //         error = true;
        //     });
        // }


    // )

    useEffect(() => {   
        const fetchData = async () => {
            const result = await axios(
            '/games/0/70',
            );
            
            console.log('[Games.js] status of code for all games is: ' + result.status)

            setData(result.data);
            setError(false)
        };
    
        fetchData();

    }, []);

    let games = <p style={{textAlign: 'center'}}>Loading games...</p>;
    if (!error) {

        console.log('[Games.js] no error found, showing list of games')

        console.log(data)

        games = data.map(game => {
            return <Game
                key={game.id}
                name={game.name}
                summary={game.summary}
                screenshots={game.screenshot_info}>

            </Game>
        })

        // games = this.state.games.map(game => {
            
        //     return <Post 
        //                 key={post.id}
        //                 title={post.title} 
        //                 author={post.author}
        //                 clicked={() => this.postSelectedHandler(post.id)}  />
        // });

    }

    return (
        <div>
            <section className="Games">
                {games}
            </section>
            {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} />  */}
        </div>
    );

}

export default games;