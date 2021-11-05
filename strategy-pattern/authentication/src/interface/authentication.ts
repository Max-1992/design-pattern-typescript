export interface IAuthentication {
    logIn(userName: string, password: string): any
    logOut(): any
    singUp(userName: string, password: string): any
}