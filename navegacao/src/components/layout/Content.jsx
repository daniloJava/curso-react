import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import Param from '../../views/examples/Param'
import './Content.css'


const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/param/:id">
                <Param></Param>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    </main>
)

export default Content