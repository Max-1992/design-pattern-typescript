import { IAuthentication } from './../interface/authentication'

export class CustomAuthenticator implements IAuthentication {

    logIn(userName: string, password: string): any {
        // Code instructions Custom integration
        console.log(`Se ejecuto el método LOGIN con CustomAuthenticator. Params: userName ${userName}, password ${password}`)

    }

    logOut(): any {
        // Code instructions Custom integration
        console.log(`Se ejecuto el método LOGOUT con CustomAuthenticator.`)
    }

    singUp(userName: string, password: string): any {
        // Code instructions Custom integration
        console.log(`Se ejecuto el método SINGUP con CustomAuthenticator. Params: userName ${userName}, password ${password}`)

    }

}