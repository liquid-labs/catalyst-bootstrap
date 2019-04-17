import React from 'react'

import { AccountControlWidget } from '@liquid-labs/catalyst-users-ui'
import { BasicContentFrame, FourOhFour as FourOhFourContent } from '@liquid-labs/catalyst-core-ui'

const FourOhFour = (FourOhFourContentProps) => {
  const accountControlWidget = <AccountControlWidget />

  return (
    <BasicContentFrame>
      <FourOhFourContent {...FourOhFourContentProps} />
    </BasicContentFrame>
  )
}

export { FourOhFour }
