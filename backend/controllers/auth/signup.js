import User from "../../models/users.js";

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
        // res the cookie
        res.status(201).json({ user: user._id, username: user.username})
    } catch (err) {
        res.status(401).json({msg: 'error occured during signUp'})
        console.log(err) 
    }
}
export default signUp