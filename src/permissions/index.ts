import { rule, shield } from 'graphql-shield'
const { verify } = require('jsonwebtoken')
import { Context } from '../context'
export const APP_SECRET = 'appsecret321'

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const Authorization = context.req.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token

    return verifiedToken && verifiedToken.userId
  }
}

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    console.log('userId', userId)

    return Boolean(userId)
  }),
  // isPostOwner: rule()(async (parent, { id }, context) => {
  //   const userId = getUserId(context)
  //   const author = await context.prisma.post
  //     .findUnique({
  //       where: {
  //         id: Number(id),
  //       },
  //     })
  //     .author()
  //   return userId === author.id
  // }),
}

export const permissions = shield(
  {
    Query: {
      me: rules.isAuthenticatedUser,
      // filterPosts: rules.isAuthenticatedUser,
      // post: rules.isAuthenticatedUser,
    },
    Mutation: {
      // deleteOneUser: rules.isAuthenticatedUser,
      // createDraft: rules.isAuthenticatedUser,
      // deletePost: rules.isPostOwner,
      // publish: rules.isPostOwner,
    },
  },
  { debug: true },
)
