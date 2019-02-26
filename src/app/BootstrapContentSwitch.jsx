import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Dashboard } from '../components/app/ui/Dashboard'
import { FourOhFour } from '../components/app/ui/FourOhFour'
import { UserProfile } from '@liquid-labs/catalyst-users-ui'

import * as bootstrapRoutes from './bootstrapRoutes'

const BootstrapContentSwitch = () =>
  <Switch>
    <Route exact path={bootstrapRoutes.LANDING} component={Dashboard} />
    <Route exact path='/users/:id/profile' component={() => <UserProfile />} />
    { /* default 404/Not Found handler */ }
    <Route component={() => <FourOhFour noAuthRedirect={bootstrapRoutes.LANDING} />} />
  </Switch>

export { BootstrapContentSwitch }
