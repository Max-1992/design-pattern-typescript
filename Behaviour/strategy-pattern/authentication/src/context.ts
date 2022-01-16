import { IAuthentication } from './interface/authentication';
import authenticationOpts from './constants'

class HandlerAuthenticator {

    private authenticators: any 

    constructor (
        private readonly facebookAuthentication: IAuthentication,
        private readonly googleAuthentication: IAuthentication,
        private readonly auth0Authentication: IAuthentication,
        private readonly customAuthentication: IAuthentication
    ) {

      this.authenticators = {
        [authenticationOpts.FACEBOOK]: 'facebookAuthentication',
        [authenticationOpts.GOOGLE]: 'googleAuthentication',
        [authenticationOpts.AUTH0]: 'auth0Authentication',
        [authenticationOpts.CUSTOM]: 'customAuthentication'
      }
    }

    login (userName: string, password: string, authenticator: string) {
      const strategy = this.authenticators[authenticator]
      this[strategy].logIn(userName, password)
    }

    logout (authenticator: string) {
      const strategy = this.authenticators[authenticator]
      this[strategy].logOut()
    }

    singup (userName: string, password: string, authenticator: string) {
      const strategy = this.authenticators[authenticator]
      this[strategy].singUp(userName, password)
    }

}

export default HandlerAuthenticator
