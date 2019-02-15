import React from 'react'

import { AccountControlWidget } from '@liquid-labs/catalyst-users-ui'
import { BasicContentFrame } from '@liquid-labs/catalyst-core-ui'
import { SetupInstructions } from '../../setup/ui/SetupInstructions'

const Dashboard = () => {
  const accountControlWidget = <AccountControlWidget />

  return (
    <BasicContentFrame AppNavigationProps={{ logoTo : '/', rightChildren : accountControlWidget }}>
      <SetupInstructions />
    </BasicContentFrame>
  )
}

export { Dashboard }
