import React from 'react'

import { AuthenticationDialog } from '@liquid-labs/catalyst-users'
import { SetupInstructions } from './components/ui/SetupInstructions'

export const App = () =>
  process.env.REACT_APP_FIREBASE_API_KEY
    ? (
      <div>
        <AuthenticationDialog />
      </div>
    )
    : <SetupInstructions />
