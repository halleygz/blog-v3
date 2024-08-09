import User from "../../models/users.js";
import gentTokenAndCookie from "../../utils/genToken.js";

const signUp = async (req, res) => {
    const {fullName, username, email, password, avatar} = req.body
    try {
        const user = await User.create({
            fullName,
            username,
            email,
            password,
            avatar
        })
        // gen the token here by userId
        if (user) {
            gentTokenAndCookie(user._id, res)
            res.status(201).json({ user: user._id, username: user.username, avatar:user.avatar})
        } else {
            res.status(401).json({error: 'invalid user data'})
        }
    } catch (err) {
        res.status(401).json({error: 'Internal server error'})
        console.log(err) 
    }
}
export default signUp
