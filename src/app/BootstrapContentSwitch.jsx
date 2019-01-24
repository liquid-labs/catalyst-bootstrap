import React from 'react'

import PropTypes from 'prop-types'

import { Route, Switch, withRouter } from 'react-router-dom'

import { Dashboard } from '../components/app/ui/Dashboard'
import { FourOhFour } from '../components/app/ui/FourOhFour'
import { UserProfile } from '@liquid-labs/catalyst-users-ui'

import * as bootstrapRoutes from './bootstrapRoutes'

const BootstrapContentSwitchBase = ({location}) =>
  <Switch>
    <Route exact path={bootstrapRoutes.LANDING} component={Dashboard} />
    <Route exact path='/users/self/profile' component={UserProfile} />
    { /* default 404/Not Found handler */ }
    <Route component={() => <FourOhFour noAuthRedirect={bootstrapRoutes.LANDING} />} />
  </Switch>

BootstrapContentSwitchBase.propTypes = {
  location : PropTypes.object.isRequired
}

// 'withRouter' makes the switch 'location' aware so it'll update when the URL
// changes
const BootstrapContentSwitch = withRouter(BootstrapContentSwitchBase)

export { BootstrapContentSwitch }
