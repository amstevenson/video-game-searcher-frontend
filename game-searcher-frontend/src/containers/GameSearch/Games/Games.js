import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import './Games.css'

const games = (props) => {

    const [error, setError] = useState(0); // initialise state
    
    useEffect( () => {

        axios.get('/games/0') // Offset of 0, will need to ammend later to feed in the right one
            .then( response => {
                console.log('[Games.js] Successful response: ' + response.data)

            } )
            .catch(error => {
                console.log('[Games.js] ' + error);
            });
        }
    )

    let games = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!error) {

        console.log('[Games.js] no error found, showing list of games')

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
                <div>Games list</div>
                {games}
            </section>
            {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} />  */}
        </div>
    );

}

export default games;