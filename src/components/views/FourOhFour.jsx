import React from 'react'

import { BasicContentFrame, FourOhFour as FourOhFourContent } from '@liquid-labs/catalyst-core-ui'

const FourOhFour = (FourOhFourContentProps) =>
  <BasicContentFrame>
    <FourOhFourContent {...FourOhFourContentProps} />
  </BasicContentFrame>

export { FourOhFour }
