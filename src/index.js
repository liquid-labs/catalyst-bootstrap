import React from 'react'
import { render } from 'react-dom'
import './app'
import { basicWaiterSetup } from '@liquid-labs/react-waiter'

import { BootstrapContentSwitch } from './app/BootstrapContentSwitch'

import { CatalystAppFrame } from '@liquid-labs/catalyst-core-ui'
import { BootstrapBottomNavigation } from './components/app/ui/BootstrapBottomNavigation'

import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import { coreInit } from '@liquid-labs/catalyst-core-api'

import './index.css'

const theme = createCatalystTheme()
const { reduxStore } = coreInit()

basicWaiterSetup()

render(
  <CatalystAppFrame
      theme={theme}
      reduxStore={reduxStore}
      ContentSwitch={BootstrapContentSwitch}
      BottomNavigation={BootstrapBottomNavigation} />,
  document.getElementById('root'))
