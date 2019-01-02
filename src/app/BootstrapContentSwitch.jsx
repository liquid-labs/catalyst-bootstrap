import React from 'react'

import { Route, Switch, withRouter } from 'react-router-dom'

import { SetupInstructions } from '../components/setup/ui/SetupInstructions'

import * as bootstrapRoutes from './bootstrapRoutes'

const BootstrapContentSwitchBase = ({location}) =>
  <Switch>
    <Route exact path={bootstrapRoutes.LANDING} component={() => <SetupInstructions />} />
    { /* default 404/Not Found handler */ }
    { /* <Route component={() => <FourOhFour noAuthRedirect={unoRoutes.LANDING} />} />  */ }
  </Switch>

// 'withRouter' makes the switch 'location' aware so it'll update when the URL
// changes
const BootstrapContentSwitch = withRouter(BootstrapContentSwitchBase)

export { BootstrapContentSwitch }
