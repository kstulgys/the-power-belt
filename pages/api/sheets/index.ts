// import { google } from "googleapis";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_EMAILS_DB_ID;

export default async function handler(req, res) {
  const { email, isChecked } = req.body;
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        email: {
          type: "email",
          email,
        },
        consent: {
          type: "checkbox",
          checkbox: isChecked,
        },
      },
    });
    console.log("Success! Entry added.");
    res.status(200).json({});
  } catch (error) {
    console.error(error.body);
  }
}
