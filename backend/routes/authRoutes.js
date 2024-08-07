import {Router} from 'express'
import signUp from '../controllers/auth/signup.js'
import login from '../controllers/auth/login.js'

const router = Router()

router.post('/signup', signUp)
router.post('/login', login)

export default router

