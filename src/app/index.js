/*, contextSettings */
import { coreSetup, resourcesSettings } from '@liquid-labs/catalyst-core-api'

import { resources } from './bootstrapResources'
import { resourceURLs } from './apiConfig'
// import { contexts } from './bootstrapsContexts'

resources.forEach((resourceConf) =>
  resourceConf.baseURL = resourceURLs[resourceConf.resourceName]
)

resourcesSettings.setResources(resources)
// contextSettings.setContexts(contexts)

coreSetup()
