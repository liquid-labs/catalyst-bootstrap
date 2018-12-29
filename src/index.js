import React from 'react'
import * as Redux from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { combineReducers } from 'redux'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { config, coreReducers, store } from '@liquid-labs/catalyst-core'
import { sessionReducer } from '@liquid-labs/catalyst-users'

import { createMuiTheme } from '@material-ui/core/styles'

import './index.css'
import App from './App'

// import { resources } from './unoResources'
// import { contexts } from './unoContexts'

// TODO
const baseUrl = process.env.NODE_ENV === 'production'
  ? "https://uno-delivery-test.appspot.com/api"
  : "http://localhost:8080/api";

config.setBaseUrl(baseUrl)
// config.setResources(resources)
// config.setContexts(contexts)

const rootReducer = combineReducers(Object.assign({
    sessionState: sessionReducer,
  },
  coreReducers))
config.setRootReducer(rootReducer)


const theme = createMuiTheme()
const rstore = store.reduxStore()
console.log(`store is: ${rstore}`)

ReactDOM.render(
  <Redux.Provider store={rstore}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </MuiThemeProvider>
  </Redux.Provider>,
  document.getElementById('root'))
