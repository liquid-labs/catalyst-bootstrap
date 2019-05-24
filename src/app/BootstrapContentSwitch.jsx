import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Dashboard, FourOhFour } from '@liquid-labs/mui-two-tone'
import { UserProfile } from '@liquid-labs/catalyst-users-ui'

const BootstrapContentSwitch = () =>
  <Switch>
    <Route exact strict path='/' component={Dashboard} />
    <Route exact strict path='/persons/self/' component={UserProfile} />
    <Route exact strict path='/persons/self/edit/' component={UserProfile} />
    { /* default 404/Not Found handler */ }
    <Route component={() => <FourOhFour noAuthRedirect='/' />} />
  </Switch>

export { BootstrapContentSwitch }
