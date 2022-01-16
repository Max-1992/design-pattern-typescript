// Context
import HandlerAuthenticator from "./context";

// Strategies
import { FacebookAuthenticator } from "./facebook/authenticator";
import { GoogleAuthenticator } from "./google/authenticator";
import { Aut0Authenticator } from "./auth0/authenticator";
import { CustomAuthenticator } from "./custom/authenticator";

const facebookAuthenticator = new FacebookAuthenticator()
const googleAuthenticator = new GoogleAuthenticator()
const aut0Authenticator = new Aut0Authenticator()
const customAuthenticator = new CustomAuthenticator()

const handlerAuthenticator = new HandlerAuthenticator(facebookAuthenticator, googleAuthenticator, aut0Authenticator, customAuthenticator);

handlerAuthenticator.singup('Maxi0092', 'mmia1234', 'FACEBOOK')
handlerAuthenticator.login('Maxi0092', 'mmia1234', 'FACEBOOK')
handlerAuthenticator.logout('FACEBOOK')

handlerAuthenticator.singup('Maxi0092', 'mmia1234', 'GOOGLE')
handlerAuthenticator.login('Maxi0092', 'mmia1234', 'GOOGLE')
handlerAuthenticator.logout('GOOGLE')

handlerAuthenticator.singup('Maxi0092', 'mmia1234', 'AUTH0')
handlerAuthenticator.login('Maxi0092', 'mmia1234', 'AUTH0')
handlerAuthenticator.logout('AUTH0')

handlerAuthenticator.singup('Maxi0092', 'mmia1234', 'CUSTOM')
handlerAuthenticator.login('Maxi0092', 'mmia1234', 'CUSTOM')
handlerAuthenticator.logout('CUSTOM')