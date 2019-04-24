import React from 'react'

import { BasicContentFrame } from '@liquid-labs/catalyst-core-ui'
import Grid from '@material-ui/core/Grid'
import { SplashLogo } from '../widgets/SplashLogo'

import AppsIcon from '@material-ui/icons/Apps'
import { CardContainer } from '@liquid-labs/mui-extensions'
import CodeIcon from '@material-ui/icons/Code'
import SearchIcon from '@material-ui/icons/Search'
import SecurityIcon from '@material-ui/icons/Security'
import SourceMergeIcon from 'mdi-material-ui/SourceMerge'

import { makeStyles, useTheme } from '@material-ui/styles'

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

const NavCard = ({key, title, description, icon, ...props}) => (
  <div key={key} {...props}>
    <div>
      {icon}{title}
    </div>
    <div>{description}</div>
  </div>
)

const Dashboard = () => {
  const theme = useTheme()
  return (
    <BasicContentFrame>
      <SplashLogo />
      <CardContainer>
        {
          theme.layout.sections.map((sectionDef) => {
            const { label, path, onClick, Icon } = sectionDef
            return <NavCard key={path} icon={<Icon />} title={label} description={label} />
          })
        }
      </CardContainer>
    </BasicContentFrame>
  )
}

export { Dashboard }
