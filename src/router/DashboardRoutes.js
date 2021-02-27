import React from 'react'
import { Navbar } from '../ui/NavBar'
import { Switch, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroesApp } from '../HeroesApp'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import {
    BrowserRouter as Router,
    Route,
    
  } from "react-router-dom";


export const DashboardRoutes = () => {
    return (
        <>
          <Navbar />
          <div>
             <Switch>
                <Route exact path="/marvel" component={MarvelScreen}/>
                <Route exact path="/heroe/:heroeId" component={HeroScreen}/>
                <Route exact path="/dc/" component={DcScreen}/>

                <Redirect to="/marvel/"/>
             </Switch>    
          </div>  
        </>
    )
}
