/**
 * Context resources ordered from highest to least precedence.
 */
const contextOrdering = []
export const contexts = {
  ordering: contextOrdering,
  info: contextOrdering.reduce((acc, context) => {
      acc[context[0]] = { resource: context[0], itemName: context[1] }
      return acc
    },
    {}),
  contextMaps: {}
}
