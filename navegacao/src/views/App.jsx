import React from 'react'
import { BrowserRouter as Route } from 'react-router-dom'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import './App.css'

const App = props => (
    <div className="App">
        <Route>
            <Menu></Menu>
            <Content></Content>
        </Route>
    </div>
)

export default App