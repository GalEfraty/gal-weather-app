module.exports = (req, res, next) => {
  //console.log("log from requireCredits middleware: number of credits: ", req.user.credits)
  if (req.user.credits < 1) {
    return res.json({ error: "Not enough credits!"});
  }
  next();
};
