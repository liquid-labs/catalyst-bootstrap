import React from 'react'

import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'

import { useTheme } from '@material-ui/styles'

const SplashLogo = () => {
  const theme = useTheme()
  const timeout = theme.transitions.duration.dramatic // Catalyst specific
    || theme.transitions.duration.complex // fallback, material-ui standard
  var logo
  if (theme.branding && theme.branding.splash) {
    const { node, url, altText } = theme.branding.splash
    logo = node || <img src={`${url}#svgView(preserveAspectRatio(xMidYMid meet))`} alt={altText} />
  }

  return (
    <Grow in={true} timeout={timeout}>
      <Grid item container justify="center" alignItems="center" style={{ flexGrow : 1 }}>
        {logo}
      </Grid>
    </Grow>
)}

export { SplashLogo }
