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

const createOrder = async () => {
  // TODO: fill me in
  const { data: sessions } = await stripe.checkout.sessions.list();
  const payed = sessions.filter((s) => s.payment_status === "paid");
  const promises = payed.map(async (p) => {
    const lineItems = await stripe.checkout.sessions.listLineItems(p.id);
    return { lineItems, ...p };
  });
  return await Promise.all(promises);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({});
  // const items = await createOrder();
};

export default handler;
