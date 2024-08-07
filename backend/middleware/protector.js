import jwt from 'jsonwebtoken'
import User from '../models/users.js'
const protector = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({error: "Unauthorised - no token"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({error: "Unauthorised - invalid token"})
        }
        const user = await User.findById(decoded.userId).select("-password")
        if (!user) {
            return res.status(401).json({error: 'user not found'})
        }
        req.user = user
        next()
    } catch (err) {
        if (err.message = "JsonWebTokenError") {
            res.status(402).json({error: "Invalid Token"})
        } else {
            console.log('error in protector middleware', err)
            res.status(500).json({error: 'internal server error'})
        }
    }
}


export default protector