const [host, protocol, apiSettings] = process.env.NODE_ENV === 'production'
  ? ['production-domain.com', 'https',
      { persons : { subdomain : 'persons' } }]
  : ['localhost', 'http',
      { persons : { port : 8081 } }]
const basePathname = 'api'

const resourceURLs = Object.entries(apiSettings)
  .reduce((urls, [resource, settings]) => {
    const resourceHost = settings.subdomain
      ? `${settings.subdomain}.${host}`
      : host
    const portBit = settings.port ? `:${settings.port}` : ''
    urls[resource] =
      new URL(`${protocol}://${resourceHost}${portBit}/${basePathname}`)
    return urls
  }, {})

export { resourceURLs }
