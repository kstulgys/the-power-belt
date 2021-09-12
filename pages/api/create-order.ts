import { Client } from "@notionhq/client";
import { RichTextInput, InputPropertyValue } from "@notionhq/client/build/src/api-types";

export default async function handler(req, res) {
  // const { order } = req.body;
  // try {
  //   const response = await notion.pages.create({
  //     parent: { database_id: databaseId },
  //     properties: {
  //       data: {
  //         type: "rich_text",
  //         rich_text: [
  //           {
  //             type: "text",
  //             text: {
  //               content: JSON.stringify(order),
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  //   console.log("Success! Entry added.");
  res.status(200).json({});
  // } catch (error) {
  //   console.error(error.body);
  // }
}
