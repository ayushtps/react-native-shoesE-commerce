const express = require('express');
const app = express();

const stripe = require('stripe')(
  'sk_test_51Ou7RESEzEDavEglTqav86oVANmi9IBWBA222LGDePskU0tUOzlFsnlOPoFdc56QPsJ1XUw9Gh9voeWz77trZQBW00go5siFBu',
);

app.use(express.json());

app.post(
  'https://67ed-116-72-44-78.ngrok-free.app/payments/intents',
  async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'inr',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      res.json({paymentIntent: paymentIntent.client_secret});
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
);

app.listen(7000, () => {
  console.log('server start 7000');
});
