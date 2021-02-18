import { intArg, nullable, queryType, stringArg } from 'nexus'
import { APP_SECRET, getUserId } from '../permissions'

export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users()

    t.nullable.field('me', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.user.findUnique({
          where: {
            id: userId,
          },
        })
      },
    })

    t.nullable.field('getCrypto', {
      type: 'Crypto',
      resolve: (parent, args, ctx) => {
        return ctx.CryptoAPI.getCrypto()
      },
    })
  },
})
