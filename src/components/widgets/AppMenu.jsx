import React, { useState } from 'react'

import { AccountMenu, AuthenticationDialog } from '@liquid-labs/catalyst-users-ui'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import DarkThemeIcon from 'mdi-material-ui/WeatherNight'
import FeedbackIcon from '@material-ui/icons/Feedback'
import LanguageIcon from '@material-ui/icons/Language'
import LightThemeIcon from 'mdi-material-ui/WhiteBalanceSunny'
import MenuIcon from '@material-ui/icons/Menu'

import { makeStyles, useTheme } from '@material-ui/styles'
import classNames from 'classnames'

const useAppMenuStyle = makeStyles({
  denseButton : { padding : '6px' }
})

const AppMenu = () => {
  const [ menuAnchor, setMenuAnchor ] = useState(null)
  const [ authenticationDialogOpen, setAuthenticationDialogOpen ] = useState(false)
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
        <AccountMenu closeMenu={closeMenu} openAuthenticationDialog={() => setAuthenticationDialogOpen(true) } />
        <Divider />
        <MenuItem onClick={null}>
          <ListItemIcon><LightThemeIcon /></ListItemIcon>
          <ListItemText>Light theme</ListItemText>
        </MenuItem>
        <MenuItem onClick={null}>
          <ListItemIcon><DarkThemeIcon /></ListItemIcon>
          <ListItemText>Dark theme</ListItemText>
        </MenuItem>
        <MenuItem onClick={null}>
          <ListItemIcon><LanguageIcon /></ListItemIcon>
          <ListItemText>Language</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={null}>
          <ListItemIcon><FeedbackIcon /></ListItemIcon>
          <ListItemText>Feedback</ListItemText>
        </MenuItem>
      </Menu>
      <AuthenticationDialog open={authenticationDialogOpen}
          onClose={() => setAuthenticationDialogOpen(false)} />
    </div>
  )
}

export { AppMenu }
