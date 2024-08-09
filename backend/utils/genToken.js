import jwt from "jsonwebtoken";
const gentTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    // httpOnly: true,
    sameSite: "strict",
    //add security measure
  });
};

export default gentTokenAndCookie;
