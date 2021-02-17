const { compare, hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
import { intArg, mutationType, nonNull, stringArg } from 'nexus'
import { APP_SECRET, getUserId } from '../permissions'

export const Mutation = mutationType({
  definition(t) {
    t.crud.deleteOneUser()

    t.field('createUser', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, { prisma }) => {
        const hashedPassword = await hash(password, 10)
        const user = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findUnique({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }

        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })
  },
})
