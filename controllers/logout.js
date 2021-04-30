exports.logOut = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ sucess: true });
};
