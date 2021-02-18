import { objectType } from 'nexus'

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.string('error')
    t.field('user', { type: 'User' })
  },
})
