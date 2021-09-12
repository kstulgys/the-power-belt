import { buffer } from "micro";
import Cors from "micro-cors";
import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import Stripe from "stripe";
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

// const fulfillOrder = async (session) => {
//   // TODO: fill me in
//   await axios.post("https://d736-78-58-239-79.ngrok.io/api/create-order", { order: session });
//   console.log("Fulfilling order", session);
// };

// const createOrder = async (session) => {
//   // TODO: fill me in
//   const { data: sessions } = await stripe.checkout.sessions.list();
//   const payed = sessions.filter((s) => s.payment_status === "paid");
//   const payedItems = [];
//   payed.forEach(async (p) => {
//     await stripe.checkout.sessions.listLineItems(p.id, { limit: 5 }, function (err, lineItems) {
//       console.log({ lineItems });
//       payedItems.push({ lineItems, session: p });
//     });
//   });
//   console.log({ payedItems });
//   await axios.post("https://d736-78-58-239-79.ngrok.io/api/create-order", { order: session });
//   console.log("Creating order", session);
// };

const getPayedItems = async () => {
  // TODO: fill me in
  const { data: sessions } = await stripe.checkout.sessions.list();
  const payed = sessions.filter((s) => s.payment_status === "paid");
  const promises = payed.map(async (p) => {
    const lineItems = await stripe.checkout.sessions.listLineItems(p.id);
    return lineItems;
  });
  return await Promise.all(promises);
};

// const emailCustomerAboutFailedPayment = (session) => {
//   // TODO: fill me in
//   console.log("Emailing customer", session);
// };

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ received: true });

  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"]!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // switch (event.type) {
    //   case "checkout.session.completed": {
    //     const session = event.data.object;
    //     // Save an order in your database, marked as 'awaiting payment'
    //     createOrder(session);

    //     // Check if the order is paid (e.g., from a card payment)
    //     //
    //     // A delayed notification payment will have an `unpaid` status, as
    //     // you're still waiting for funds to be transferred from the customer's
    //     // account.
    //     if (session.payment_status === "paid") {
    //       fulfillOrder(session);
    //     }

    //     break;
    //   }

    //   case "checkout.session.async_payment_succeeded": {
    //     const session = event.data.object;

    //     // Fulfill the purchase...
    //     fulfillOrder(session);

    //     break;
    //   }

    //   case "checkout.session.async_payment_failed": {
    //     const session = event.data.object;

    //     // Send an email to the customer asking them to retry their order
    //     emailCustomerAboutFailedPayment(session);

    //     break;
    //   }
    // }

    // res.status(200);

    // Successfully constructed event.
    console.log("✅ Success:", event.id);

    // Cast event data to Stripe object.
    // if (event.type === "checkout.session.async_payment_succeeded") {
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   await createOrder(paymentIntent);
    //   console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
    // }
    if (event.type === "charge.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
    }

    // if (event.type === "payment_intent.succeeded") {
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   // await createOrder(paymentIntent);
    //   await axios.post("https://d736-78-58-239-79.ngrok.io/api/create-order", { order: paymentIntent });
    //   console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
    // }

    //   console.log({ event });
    // axios.post("https://d736-78-58-239-79.ngrok.io/api/create-order", { order: event });

    //   axios.post("/api/create-order", { order: event });
    // } else if (event.type === "payment_intent.payment_failed") {
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   console.log(`❌ Payment failed: ${paymentIntent.last_payment_error?.message}`);
    // } else if (event.type === "charge.succeeded") {
    //   const orders = await stripe.orders.list({
    //     limit: 3,
    //   });
    //   axios.post("https://d736-78-58-239-79.ngrok.io/api/create-order", { order: orders });

    //   //   const charge = event.data.object as Stripe.Charge;
    //   //   const order = await stripe.orders.retrieve(charge.id);
    //   //   axios.post("https://d736-78-58-239-79.ngrok.io/api/create-order", { order: event });
    //   //   console.log(`💵 Charge id: ${charge.id}`);
    // } else {
    //   console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    // }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default cors(webhookHandler as any);
