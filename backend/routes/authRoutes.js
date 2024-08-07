import {Router} from 'express'
import signUp from '../controllers/auth/signup.js'
import login from '../controllers/auth/login.js'
import logOut from '../controllers/auth/logout.js'

const router = Router()

router.post('/signup', signUp)
router.post('/login', login)
router.post('/logout', logOut)

export default router

