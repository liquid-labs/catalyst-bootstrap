import React from 'react'
import { render } from 'react-dom'
import './app'

import { BootstrapContentSwitch } from './app/BootstrapContentSwitch'

import { CatalystAppFrame } from '@liquid-labs/catalyst-core-ui'
import { BootstrapBottomNavigation } from './components/app/ui/BootstrapBottomNavigation'

import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import { coreInit } from '@liquid-labs/catalyst-core-api'

import './index.css'

const theme = createCatalystTheme(
  {
    palette: { background: { default: '#fff' } },
    overrides: {
      AppNavigation : {
        root : { boxShadow : 'none', border : 'none' },
        lightNavbar : { border : 'none' },
      },
      MuiToolbar : {
        root : { border : 'none', minHeight : 'unset' },
      },
     }
  }
)
const theme2 = createCatalystTheme({ palette: { background: { default: '#a00' }}})

const themeRouter = [
  [/^[/]$/, theme],
  [/.*/, theme2]
]

const { reduxStore } = coreInit()

render(
  <CatalystAppFrame
      themeRouter={themeRouter}
      reduxStore={reduxStore}
      ContentSwitch={BootstrapContentSwitch}
      BottomNavigation={BootstrapBottomNavigation} />,
  document.getElementById('root'))
