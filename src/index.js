import React from 'react'
import { render } from 'react-dom'
import './app'

import { BootstrapContentSwitch } from './app/BootstrapContentSwitch'

import { AppMenu } from './components/widgets/AppMenu'
import { CatalystAppFrame } from '@liquid-labs/catalyst-core-ui'
import { BootstrapBottomNavigation } from './components/widgets/BootstrapBottomNavigation'

import { createCatalystTheme } from '@liquid-labs/catalyst-theme'
import { coreInit } from '@liquid-labs/catalyst-core-api'

import './index.css'

const theme = createCatalystTheme(
  {
    palette: {
      background: { default: '#fff' },
      primary : {
        main          : '#1b3382',
        contrastText  : 'white',
      },
      secondary : {
        main : '#d96201',
        contrastText : 'white'
      }
    },
    overrides: {
      AppNavigation : {
        root : { boxShadow : 'none', border : 'none' },
        lightNavbar : { border : 'none' },
      },
      MuiIconButton : { root : {} },
      MuiToolbar : {
        root : { border : 'none', minHeight : 'unset' },
        dense : { minHeight: '36px' },
      },
    },
    layout : {
      header : {
        showLogo : false,
        variant  : 'dense',
        appMenu  : { node: <AppMenu /> },
      },
    },
    branding : {
      splash : {
        url : 'https://liquid-labs.com/static/img/landing/liquid-labs-logo-landscape.svg',
        altText : 'Liquid Labs logo'
      }
    }
  }
)
const theme2 = createCatalystTheme({
  layout: {
    header : {
      appMenu : { node: <AppMenu /> }
    }
  }
})

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
