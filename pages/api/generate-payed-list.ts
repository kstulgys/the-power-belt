import { Client } from "@notionhq/client";
import { RichTextInput, InputPropertyValue } from "@notionhq/client/build/src/api-types";
import Stripe from "stripe";
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_POWERBELT_ORDERS_DB_ID;

const getOrders = async () => {
  const { data: sessions } = await stripe.checkout.sessions.list();
  const payed = sessions.filter((s) => s.payment_status === "paid");
  const promises = payed.map(async (p) => {
    const lineItems = await stripe.checkout.sessions.listLineItems(p.id);
    return { lineItems, ...p };
  });
  return await Promise.all(promises);
};

export default async function handler(req, res) {
  // try {
  //   const orders = await getOrders();
  //   orders.forEach(({ lineItems, shipping }) => {
  //     notion.pages.create({
  //       parent: { database_id: databaseId },
  //       properties: {
  //         data: {
  //           type: "rich_text",
  //           rich_text: [
  //             {
  //               type: "text",
  //               text: {
  //                 content: JSON.stringify(lineItems),
  //               },
  //             },
  //           ],
  //         },
  //         shipping: {
  //           type: "rich_text",
  //           rich_text: [
  //             {
  //               type: "text",
  //               text: {
  //                 content: JSON.stringify(shipping),
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     });
  //   });
  //   console.log("Success! Entry added.");
  res.status(200).json({});
  // } catch (error) {
  //   console.error(error.body);
  // }
}
