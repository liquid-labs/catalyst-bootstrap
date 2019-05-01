import React from 'react'
import { render } from 'react-dom'
import './app'

import { BootstrapContentSwitch } from './app/BootstrapContentSwitch'

import { CatalystAppFrame } from '@liquid-labs/catalyst-core-ui'

import AppsIcon from '@material-ui/icons/Apps'
import CodeIcon from '@material-ui/icons/Code'
import SearchIcon from '@material-ui/icons/Search'
import SecurityIcon from '@material-ui/icons/Security'
import SourceMergeIcon from 'mdi-material-ui/SourceMerge'

import { createMuiTwoToneTheme } from '@liquid-labs/mui-two-tone'
import { coreInit } from '@liquid-labs/catalyst-core-api'
import { resources, resourceURLs } from './app'

import './index.css'

const sections = [
  { label: 'Setup instructions', path: '/views/setup-instructions/' },
]

const themeSpec = {
  sections
}

const { reduxStore } = coreInit(resources, resourceURLs)
const { themeRouter } = createMuiTwoToneTheme(themeSpec)

render(
  <CatalystAppFrame
      themeRouter={themeRouter}
      reduxStore={reduxStore}
      ContentSwitch={BootstrapContentSwitch} />,
  document.getElementById('root'))
