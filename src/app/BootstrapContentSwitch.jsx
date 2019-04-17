import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Dashboard } from '../components/views/Dashboard'
import { FourOhFour } from '../components/views/FourOhFour'
import { UserProfile } from '@liquid-labs/catalyst-users-ui'

import * as bootstrapRoutes from './bootstrapRoutes'

const BootstrapContentSwitch = () =>
  <Switch>
    <Route exact strict path={bootstrapRoutes.LANDING} component={Dashboard} />
    <Route exact strict path='/persons/self/' component={UserProfile} />
    <Route exact strict path='/persons/self/edit/' component={UserProfile} />
    { /* default 404/Not Found handler */ }
    <Route component={() => <FourOhFour noAuthRedirect={bootstrapRoutes.LANDING} />} />
  </Switch>

export { BootstrapContentSwitch }
