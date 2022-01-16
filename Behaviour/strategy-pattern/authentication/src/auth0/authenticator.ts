import { IAuthentication } from './../interface/authentication'

export class Aut0Authenticator implements IAuthentication {

    logIn(userName: string, password: string): any {
        // Code instructions Aut0 integration
        console.log(`Se ejecuto el método LOGIN con Aut0Authenticator. Params: userName ${userName}, password ${password}`)

    }

    logOut(): any {
        // Code instructions Aut0 integration
        console.log(`Se ejecuto el método LOGOUT con Aut0Authenticator.`)

    }

    singUp(userName: string, password: string): any {
        // Code instructions Aut0 integration
        console.log(`Se ejecuto el método SINGUP con Aut0Authenticator. Params: userName ${userName}, password ${password}`)

    }

}