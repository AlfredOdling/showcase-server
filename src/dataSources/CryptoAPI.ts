const { RESTDataSource } = require('apollo-datasource-rest')

export class CryptoAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL =
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/'
  }

  //   async getCrypto(id) {
  //     return this.get(`movies/${id}`)
  //   }

  async getCrypto() {
    const { results } = await this.get(`latest`)

    return results
  }

  //   willSendRequest(request) {
  //     request.params.set('api_key', this.context.token)
  //   }
}
