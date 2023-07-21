const Stripe = require("stripe");
const {STRIPE_KEY} = process.env;
const stripe = new Stripe(STRIPE_KEY)


module.exports = async (req, res ) => {
    try {
        const {id, amount} = req.body;
        if(!id || !amount) return res.status(404).send("No se ha encontrado id de compra")
        const pago = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            payment_method: id,
            confirm: true
        })
        console.log("Desde postCompra", pago);
        //console.log("postCompra id", newObject);
        res.status(200).json(pago);
    } catch (error) {
        console.log("error", error.message);
        //res.status(500).send(error.message)
        res.status(500).json({message: error.raw.message})
    }
}
