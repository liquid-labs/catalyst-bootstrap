import React from 'react'

import { Route, Switch, withRouter } from 'react-router-dom'

import { Dashboard } from '../components/app/ui/Dashboard'
import { FourOhFour } from '../components/app/ui/FourOhFour'

import * as bootstrapRoutes from './bootstrapRoutes'

const BootstrapContentSwitchBase = ({location}) => {
  console.log("location: ", location)
  return (
  <Switch>
    <Route exact path={bootstrapRoutes.LANDING} component={() => <Dashboard />} />
    { /* default 404/Not Found handler */ }
    <Route component={() => <FourOhFour noAuthRedirect={bootstrapRoutes.LANDING} />} />
  </Switch>
)
}

// 'withRouter' makes the switch 'location' aware so it'll update when the URL
// changes
const BootstrapContentSwitch = withRouter(BootstrapContentSwitchBase)

export { BootstrapContentSwitch }
