import { objectType, asNexusMethod } from 'nexus'
import { GraphQLDateTime } from 'graphql-iso-date'
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.email()
    t.model.password()
  },
})
