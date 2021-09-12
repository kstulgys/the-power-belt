import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

// price_data: {
//   currency: string;
//   product_data: {
//     name: string;
//     description: string;
//     // images: string[];
//   };
//   unit_amount: number;
// };
// quantity: number;

// function getMetadata(lineItems) {
//   return lineItems.reduce((acc, { price_data, quantity }) => {
//     const { name, images } = price_data;
//     acc[next.id] = JSON.stringify({ imageUrl: "", quantity });
//   }, {});
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { line_items } = req.body;
      const params = {
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "AU"],
        },
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${req.headers.origin}/thank-you/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      } as Stripe.Checkout.SessionCreateParams;

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
      // res.redirect(303, session.url);
    } catch (err) {
      console.log({ err });
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
