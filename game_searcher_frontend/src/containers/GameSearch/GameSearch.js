import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './GameSearch.css';
import Games from './Games/Games'

const gameSearch = () => {

    

    return (
        <div className="GameSearch">
            <header>
                <nav>
                    <ul>
                        <li><NavLink 
                            exact 
                            to="/games"
                            activeClassName="active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Games</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post', 
                            hash: '#submit',
                            search: '?quick-submit=true' // Where we are going to when we click
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/games" component={Games} /> 
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from ='/' to ='/posts' /> */}
                </Switch>

            </header>
        
            

        </div>
    )
}

export default gameSearch;