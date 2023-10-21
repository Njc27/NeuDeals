const stripe = require('stripe')('sk_test_51MxiBCGWzgE21swU9WMEeZ9z3flVOftf1OhM2mYQ0At7OjBBk9zGmN6ZHw70BV0d4EnEgs2YtU6XZ6aPqqRDNAHH00GAHNjDDW');

const createSession = async (req,res,next) =>{
    const amount = req.body.discountPrice;
    const prodName = req.body.prodName;
    const desc = req.body.desc;
    const image = req.body.image1.imageUrl;
    const session = await stripe.checkout.sessions.create({
        line_items: [{
          price_data: {
            currency: 'usd',
            unit_amount: amount * 100,
            product_data: {
              name: prodName,
              description: desc,
              images: [image],
            },
          },
          quantity: 1,
        }],
        mode: 'payment',    
        success_url: 'http://localhost:3000/payment',
        cancel_url: 'http://localhost:3000/',
      });
      res.send({url:session.url});
}


  module.exports = {
    createSession
  }