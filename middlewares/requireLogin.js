module.exports = (req, res, next) => {
  //console.log(req.user)
  if (!req.user) {
    return res.json({ error: "You must log in!" });
  }
  next();
};
