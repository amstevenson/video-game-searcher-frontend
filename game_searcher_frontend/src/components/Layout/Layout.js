import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Layout.css';
import Games from '../../containers/Games/Games'

const gameSearch = () => {

    return (
        <div className="Layout">
            <header>

                <nav className="topnav">
                    <NavLink 
                        exact 
                        to="/games"
                        activeClassName="active">All Games</NavLink>
                    <NavLink to={{
                        pathname: '/new-game'
                    }}>Upcoming Games</NavLink>
                    <div className="topnav-right">
                        <NavLink to={{
                            pathname: '/new-game'
                        }}>Search</NavLink>
                        <NavLink to={{
                            pathname: '/new-game'
                        }}>About</NavLink>
                    </div>
                </nav>

                <Switch>
                    <Route path="/games" exact component={Games} /> 
                    <Route path="games/:id" exact component={Games} /> 
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>

            </header>
        
        </div>
    )
}

export default gameSearch;