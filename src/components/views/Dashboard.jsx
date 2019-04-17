import React from 'react'

import { BasicContentFrame } from '@liquid-labs/catalyst-core-ui'
// import { SetupInstructions } from './SetupInstructions'

import Grid from '@material-ui/core/Grid'
import Markdown from 'react-markdown'
import Grow from '@material-ui/core/Grow'
import * as Sqrl from 'squirrelly'

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

const Dashboard = () => {
  return (
    <BasicContentFrame>
      <SplashPagePOC />
      <MarkdownPOC />
    </BasicContentFrame>
  )
}

export { Dashboard }
