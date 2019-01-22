import React from 'react'

import { AccountControl } from '@liquid-labs/catalyst-users-ui'
import { BasicContentFrame, FourOhFour as FourOhFourContent } from '@liquid-labs/catalyst-core-ui'

const FourOhFour = (FourOhFourContentProps) => {
  const accountControl = <AccountControl />

  return (
    <BasicContentFrame AppNavigationProps={{ logoTo : '/', rightChildren : accountControl }}>
      <FourOhFourContent {...FourOhFourContentProps} />
    </BasicContentFrame>
  )
}

export { FourOhFour }
