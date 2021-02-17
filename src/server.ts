import { ApolloServer } from 'apollo-server'
import { createContext } from './context'
import { schema } from './schema'

const server = new ApolloServer({
  schema,
  context: createContext,
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`\🚀 Server ready at port: ${PORT}`))
