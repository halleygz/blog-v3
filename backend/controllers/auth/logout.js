const logOut = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logout success!" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    console.log("error occured during logout", err);
  }
};

export default logOut;
