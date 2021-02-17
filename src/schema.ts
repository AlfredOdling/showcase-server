import { applyMiddleware } from 'graphql-middleware'
import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { permissions } from './permissions'
import * as types from './types'

export const schema = applyMiddleware(
  makeSchema({
    types,
    plugins: [nexusPrisma({ experimentalCRUD: true })],
    outputs: {
      schema: __dirname + '/generated/schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
    contextType: {
      module: require.resolve('./context'),
      alias: 'Context',
      export: 'Context',
    },
    sourceTypes: {
      modules: [
        {
          module: '@prisma/client',
          alias: 'client',
        },
      ],
    },
  }),
  permissions,
)
