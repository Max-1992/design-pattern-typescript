import { IAuthentication } from './../interface/authentication'

export class FacebookAuthenticator implements IAuthentication {

    logIn(userName: string, password: string): any {
        // Code instructions Facebook integration
        console.log(`Se ejecuto el método LOGIN con FacebookAuthenticator. Params: userName ${userName}, password ${password}`)
    }

    logOut(): any {
        // Code instructions Facebook integration
        console.log(`Se ejecuto el método LOGOUT con FacebookAuthenticator.`)
    }

    singUp(userName: string, password: string): any {
        // Code instructions Facebook integration
        console.log(`Se ejecuto el método SINGUP con FacebookAuthenticator. Params: userName ${userName}, password ${password}`)
    }

}