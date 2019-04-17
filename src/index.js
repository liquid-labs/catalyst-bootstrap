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

// the following is inserted as a placeholder and is copyright Liquid Labs
const headerLogo =
  <svg className="logoHeader" xmlSpace="preserve" style={{ overflow: 'visible' }} enableBackground="new 0 0 414.722 672.592" overflow="visible" viewBox="0 0 368.46886 68.500996" id="Layer_1" version="1.1">
    <metadata key="meta" id="metadata88"></metadata>
    <style key="style">{`
        a { fillOpacity: 1; fill: inherit; stroke: none; }
    `}</style>
    <defs key="defs" id="defs86"></defs>
    <path key="path-L" d="m 55.584985,68.501 -49.2630003,0 c -4.215,0 -6.321999958792,-1.64 -6.321999958792,-4.918 0,-0.645 0.08799999879,-1.288 0.262999998792,-1.932 L 20.371985,10e-4 l 16.421,0 -13.348,41.101 c -0.234,0.585 -0.352,1.17 -0.352,1.756 0,3.396 2.107,5.094 6.323,5.094 l 32.842,0 -6.673,20.549 z" id="path4472" className="a"></path>
    <path key="path-i" d="m 47.775985,41.126 -16.508,0 8.957,-27.397 16.421,0 -8.87,27.397 z m 11.065,-34.25 -16.421,0 2.195,-6.875 16.509,0 -2.283,6.875 z" id="path4474" className="a"></path>
    <path key="path-q" d="m 118.38498,68.501 -49.349995,0 c -4.157,0 -6.235,-1.667 -6.235,-5.001 0,-0.645 0.088,-1.259 0.264,-1.843 l 6.674,-20.531 -8.167,0 c -1.932,0 -3.454,-0.542 -4.566,-1.627 -1.112,-1.084 -1.668,-2.33 -1.668,-3.737 0,-0.527 0.059,-1.026 0.176,-1.495 l 4.479,-13.719 c 0.526,-1.641 1.902,-3.194 4.127,-4.66 2.225,-1.466 4.332,-2.199 6.322,-2.199 l 24.676,0 -8.957,27.406 c -0.234,0.761 -0.352,1.493 -0.352,2.196 0,3.104 2.137,4.655 6.411,4.655 l 32.841995,0 -6.676,20.555 z m -44.169995,-41.063 2.195,-6.875 -8.166,0 -2.283,6.875 8.254,0 z" id="path4476" className="a"></path>
    <path key="path-u" d="m 127.08898,34.282 c -0.586,1.813 -1.786,3.363 -3.601,4.65 -1.99,1.463 -4.273,2.193 -6.849,2.193 l -16.421,0 c -1.932995,0 -3.454995,-0.497 -4.566995,-1.491 -1.112,-0.994 -1.668,-2.223 -1.668,-3.686 0,-0.526 0.088,-1.082 0.264,-1.667 l 6.673995,-20.531 16.421,0 -4.479,13.688 8.255,0 4.479,-13.688 8.166,0 -6.674,20.532 z" id="path4478" className="a"></path>
    <path key="path-i2" d="m 150.54798,41.126 -16.509,0 8.957,-27.397 16.421,0 -8.869,27.397 z m 11.064,-34.25 -16.421,0 2.195,-6.875 16.509,0 -2.283,6.875 z" id="path4480" className="a"></path>
    <path key="path-d" d="m 191.56398,41.126 -24.676,0 c -1.99,0 -3.571,-0.557 -4.742,-1.671 -0.995,-0.938 -1.492,-2.14 -1.492,-3.605 0,-0.527 0.088,-1.056 0.264,-1.583 l 4.391,-13.719 c 0.644,-1.935 2.137,-3.605 4.479,-5.013 2.049,-1.23 4.039,-1.847 5.971,-1.847 l 8.255,0 4.478,-13.688 16.421,0 -13.349,41.126 z m -12.03,-13.688 2.195,-6.875 -8.167,0 -2.195,6.875 8.167,0 z" id="path4482" className="a"></path>
    <path key="path-L2" d="m 267.54098,68.501 -49.263,0 c -4.215,0 -6.322,-1.64 -6.322,-4.918 0,-0.645 0.088,-1.288 0.263,-1.932 l 20.109,-61.65 16.421,0 -13.348,41.101 c -0.234,0.585 -0.352,1.17 -0.352,1.756 0,3.396 2.107,5.094 6.323,5.094 l 32.842,0 -6.673,20.549 z" id="path4484" className="a"></path>
    <path key="path-a" d="m 275.88898,41.126 -8.518,0 0.966,-2.281 c -2.811,1.521 -5.035,2.281 -6.674,2.281 l -10.449,0 c -1.405,0 -2.752,-0.41 -4.04,-1.231 -1.464,-0.938 -2.195,-2.198 -2.195,-3.781 0,-0.586 0.088,-1.201 0.264,-1.847 l 4.479,-13.719 c 0.526,-1.641 1.829,-3.194 3.907,-4.66 2.078,-1.466 4.26,-2.199 6.543,-2.199 l 24.675,0 -8.958,27.437 z m -3.775,-13.688 2.283,-6.875 -8.255,0 -2.195,6.875 8.167,0 z" id="path4486" className="a"></path>
    <path key="path-b" d="m 319.54388,34.266 c -0.703,2.17 -2.064,3.855 -4.084,5.057 -2.02,1.202 -4.141,1.803 -6.365,1.803 l -24.6759,0 13.348,-41.125 16.5079,0 -4.477,13.688 8.166,0 c 1.873,0 3.41,0.426 4.609,1.275 1.199,0.849 1.801,2.037 1.801,3.562 0,0.645 -0.117,1.319 -0.352,2.022 l -4.478,13.718 z m -5.97,-6.828 2.195,-6.875 -8.254,0 -2.1949,6.875 8.2539,0 z" id="path4488" className="a"></path>
    <path key="path-s" d="m 359.24888,61.657 c -0.645,1.871 -2.063,3.479 -4.259,4.826 -2.195,1.345 -4.26,2.018 -6.191,2.018 l -43.9059,0 6.7619,-20.513 27.397,0 c 5.21,0 8.664,-2.279 10.362,-6.837 0.526,-1.344 0.79,-2.426 0.79,-3.244 0,-2.396 -2.254,-3.594 -6.762,-3.594 l -8.166,0 c -4.216,0 -6.323,-1.645 -6.323,-4.936 0,-0.646 0.088,-1.293 0.264,-1.939 l 2.283,-6.875 c 0.585,-1.821 1.961,-3.423 4.127,-4.804 2.166,-1.381 4.273,-2.071 6.323,-2.071 l 16.421,0 -2.283,6.875 -8.167,0 -2.195,6.875 16.421,0 c 4.215,0 6.322,1.58 6.322,4.738 0,0.644 -0.117,1.346 -0.351,2.105 l -8.869,27.376 z" id="path4490" className="a"></path>
  </svg>


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
      header : {
        node : headerLogo
      },
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
  },
  branding : {
    header : {
      node : headerLogo
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
