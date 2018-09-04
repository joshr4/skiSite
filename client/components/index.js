/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
// export {default as Header} from './header/Header'
export {Login, Signup} from './auth-form'
export {default as Blog} from './Blog'
export {default as Press} from './Press'
export {default as Faq} from './Faq'
export {default as Contact} from './Contact'
export {default as Support} from './Support'
export {default as Privacy} from './Privacy'
export {default as Tos} from './Tos'
