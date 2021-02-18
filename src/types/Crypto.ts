import { objectType } from 'nexus'

export const Crypto = objectType({
  name: 'Crypto',
  definition(t) {
    t.model.id()
    t.model.value()
  },
})
