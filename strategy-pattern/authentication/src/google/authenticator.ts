import { IAuthentication } from './../interface/authentication'

export class GoogleAuthenticator implements IAuthentication {

    logIn(userName: string, password: string): any {
        // Code instructions Google integration
        console.log(`Se ejecuto el método LOGIN con GoogleAuthenticator. Params: userName ${userName}, password ${password}`)

    }

    logOut(): any {
        // Code instructions Google integration
        console.log(`Se ejecuto el método LOGOUT con GoogleAuthenticator.`)
    }

    singUp(userName: string, password: string): any {
        // Code instructions Google integration
        console.log(`Se ejecuto el método SINGUP con GoogleAuthenticator. Params: userName ${userName}, password ${password}`)

    }

}