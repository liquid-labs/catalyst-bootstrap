import React from 'react'

import { BasicContentFrame } from '@liquid-labs/catalyst-core-ui'
import { SplashLogo } from '../widgets/SplashLogo'
// import { SetupInstructions } from './SetupInstructions'
/*
import Markdown from 'react-markdown'
import * as Sqrl from 'squirrelly'

const MarkdownPOC = () => {
  const testMd = `# Hi!
* this is a list

*bold* words!

template var foo: {{foo}}`
  const firstPass = Sqrl.Render(testMd, { foo: 'is Foo!' })

  return <Markdown source={firstPass} />
}
*/
const Dashboard = () => {
  return (
    <BasicContentFrame>
      <SplashLogo />
    </BasicContentFrame>
  )
}

export { Dashboard }
