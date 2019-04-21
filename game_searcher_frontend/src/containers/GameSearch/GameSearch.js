import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './GameSearch.css';
import Games from './Games/Games'

const gameSearch = () => {

    return (
        <div className="GameSearch">
            <header>

                <nav className="topnav">
                    <NavLink 
                        exact 
                        to="/games"
                        activeClassName="active">All Games</NavLink>
                    <NavLink to={{
                        pathname: '/new-game', 
                        hash: '#submit',
                        search: '?quick-submit=true' // Where we are going to when we click
                    }}>Upcoming Games</NavLink>
                    <div className="topnav-right">
                        <NavLink to={{
                            pathname: '/new-game', 
                            hash: '#submit',
                            search: '?quick-submit=true' // Where we are going to when we click
                        }}>Search</NavLink>
                        <NavLink to={{
                        pathname: '/new-game', 
                        hash: '#submit',
                        search: '?quick-submit=true' // Where we are going to when we click
                        }}>About</NavLink>
                    </div>
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