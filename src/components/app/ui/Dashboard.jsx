import React, { useState } from 'react'

import { AccountControlWidget } from '@liquid-labs/catalyst-users-ui'
import { BasicContentFrame } from '@liquid-labs/catalyst-core-ui'
import { SetupInstructions } from '../../setup/ui/SetupInstructions'


import Grid from '@material-ui/core/Grid'
import Markdown from 'react-markdown'
import Grow from '@material-ui/core/Grow'
import * as Sqrl from 'squirrelly'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import LogoutIcon from 'mdi-material-ui/LogoutVariant'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DarkThemeIcon from 'mdi-material-ui/WeatherNight'
import LightThemeIcon from 'mdi-material-ui/WhiteBalanceSunny'

import { makeStyles, useTheme } from '@material-ui/styles'
import classNames from 'classnames'

const SplashPagePOC = () => {
  const config = { logoURL : 'https://liquid-labs.com/static/img/landing/liquid-labs-logo-landscape.svg' }

  return (
    <>
      <Grow in={true} timeout={750}>
        <Grid item container justify="center" alignItems="center">
          <img height="350" src={config.logoURL} alt="Liquid Labs logo"/>
        </Grid>
      </Grow>
    </>
  )
}

const MarkdownPOC = () => {
  const testMd = `# Hi!
* this is a list

*bold* words!

template var foo: {{foo}}`
  const firstPass = Sqrl.Render(testMd, { foo: 'is Foo!' })

  return <Markdown source={firstPass} />
}

const useAppMenuStyle = makeStyles({
  denseButton : { padding : '6px' }
})

const AppMenu = () => {
  const [ menuAnchor, setMenuAnchor ] = useState(null)
  const closeMenu = () => setMenuAnchor(null)

  const classes = useAppMenuStyle()
  const theme = useTheme()
  const iconClassName = classNames(theme.layout && theme.layout.header.variant === 'dense' && classes.denseButton)

  return (
    <div>
      <IconButton onClick={(e) => setMenuAnchor(e.target)} className={iconClassName}>
        <MenuIcon />
      </IconButton>
      <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu}
      >
        <MenuItem onClick={null}>
          <ListItemIcon><AccountBoxIcon /></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={null}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={null}>
          <ListItemIcon><LightThemeIcon /></ListItemIcon>
          <ListItemText>Light theme</ListItemText>
        </MenuItem>
        <MenuItem onClick={null}>
          <ListItemIcon><DarkThemeIcon /></ListItemIcon>
          <ListItemText>Dark theme</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  )
}

const Dashboard = () => {
  const accountControlWidget = <AccountControlWidget />

  return (
    <BasicContentFrame AppNavigationProps={{ logoTo : '/', rightChildren : <AppMenu /> }}>
      <SplashPagePOC />
      <MarkdownPOC />
    </BasicContentFrame>
  )
}

export { Dashboard }
