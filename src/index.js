import React from 'react'
import './app'
import * as Redux from 'react-redux'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BootstrapContentSwitch } from './app/BootstrapContentSwitch'
import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { AppFrame } from '@liquid-labs/catalyst-core-ui'
import { AuthenticationManager } from '@liquid-labs/catalyst-users-ui'
import { BootstrapBottomNavigation } from './components/app/ui/BootstrapBottomNavigation'

import { store } from '@liquid-labs/catalyst-core-ui'
import * as bootstrapRoutes from './app/bootstrapRoutes'

import './index.css'

const theme = createCatalystTheme()
const rstore = store.reduxStore()

const ConfiguredAppFrame = () =>
  <AppFrame
      ContentSwitch={BootstrapContentSwitch}
      BottomNavigation={BootstrapBottomNavigation}
      postLoginStatusChangeUrl={bootstrapRoutes.LANDING} />

ReactDOM.render(
  <Redux.Provider store={rstore}>
    <MuiThemeProvider theme={theme}>
      <AuthenticationManager>
        <Router>
          <Route path="/" component={ConfiguredAppFrame} />
        </Router>
      </AuthenticationManager>
    </MuiThemeProvider>
  </Redux.Provider>,
  document.getElementById('root'))
