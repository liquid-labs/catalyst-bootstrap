/*, contextSettings */
import { coreSetup, resourcesSettings } from '@liquid-labs/catalyst-core-api'

// import { resources } from './bootstrapResources'
// import { contexts } from './bootstrapsContexts'

const baseUrl = process.env.NODE_ENV === 'production'
  ? "https://uno-delivery-test.appspot.com/api" // TODO: parameterize this
  : "http://localhost:8080/api"

resourcesSettings.setBaseUrl(baseUrl)
resourcesSettings.setResources([])
// resourcesSettings.setResources(resources)
// contextSettings.setContexts(contexts)

coreSetup()
