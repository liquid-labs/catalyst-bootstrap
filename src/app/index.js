import { combineReducers } from 'redux'

import { config, coreReducers } from '@liquid-labs/catalyst-core-ui'
import { sessionReducer } from '@liquid-labs/catalyst-users-ui'

// import { resources } from './bootstrapResources'
// import { contexts } from './bootstrapsContexts'

const baseUrl = process.env.NODE_ENV === 'production'
  ? "https://uno-delivery-test.appspot.com/api" // TODO: parameterize this
  : "http://localhost:8080/api"

config.setBaseUrl(baseUrl)
// config.setResources(resources)
// config.setContexts(contexts)

const rootReducer = combineReducers(Object.assign({
  sessionState : sessionReducer,
},
coreReducers))
config.setRootReducer(rootReducer)
