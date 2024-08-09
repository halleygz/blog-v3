import User from "../../models/users.js";
import gentTokenAndCookie from "../../utils/genToken.js";
import bcrypt from 'bcrypt'

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const passCheck = await bcrypt.compare(password, user?.password || "")
        if (!user || !passCheck) {
            return res.status(400).json({ error: `Invalid cridentials`})
        }
        gentTokenAndCookie(user._id, res)
        res.status(200).json({
            message: `successfully logged`,
            userId: user._id,
            userName: user.username,
            avatar: user.avatar
        })
    } catch (err) {
        res.status(500).json({error: `Internal server error`})
        console.log('error occured during login', err)
    }
}

export default login