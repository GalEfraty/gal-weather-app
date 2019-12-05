const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //console.log("log from post request at billing route");
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    //console.log("charge created, from billing route: ", charge);

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });

  app.put("/api/decrementcredits", requireLogin, async (req, res) => {
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  });
};
