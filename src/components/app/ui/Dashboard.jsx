import React from 'react'

import { AccountControl } from '@liquid-labs/catalyst-users-ui'
import { BasicContentFrame } from '@liquid-labs/catalyst-core-ui'
import { SetupInstructions } from '../../setup/ui/SetupInstructions'

const Dashboard = () => {
  const accountControl = <AccountControl />

  return (
    <BasicContentFrame AppNavigationProps={{ logoTo : '/', rightChildren : accountControl }}>
      <SetupInstructions />
    </BasicContentFrame>
  )
}

export { Dashboard }
