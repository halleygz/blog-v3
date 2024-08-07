import {Router} from 'express'
import signUp from '../controllers/auth/signup.js'

const router = Router()

router.post('/signup', signUp)

export default router

