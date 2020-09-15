import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import HomePage from './containers/HomePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
