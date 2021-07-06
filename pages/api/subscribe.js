const mailchimp = require("@mailchimp/mailchimp_marketing");

const LIST_ID = "93145a63a0";
const API_KEY = "119accacf8b5c738888f26b09f5678f9-us6";
const DATACENTER = API_KEY.split("-")[1];

mailchimp.setConfig({
  apiKey: API_KEY,
  server: DATACENTER,
});

export default async (req, res) => {
  const { email } = req.body;

  const response = await mailchimp.lists.addListMember(LIST_ID, {
    email_address: "info@thepowerbelt.com",
    status: "subscribed",
    // merge_fields: {
    //   FNAME: "",
    //   LNAME: "",
    //   ADDRESS: "",
    //   PHONE: "",
    //   BIRTHDAY: ""
    //},
  });

  return res.status(201).json(response);
};

// import fetch from "isomorphic-unfetch";

// export default async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ error: "Email is required" });
//   }

//   try {
//     // const LIST_ID = process.env.MAILCHIMP_LIST_ID;
//     // const API_KEY = process.env.MAILCHIMP_API_KEY;
//     // const DATACENTER = API_KEY.split('-')[1];

//     const LIST_ID = "93145a63a0";
//     const API_KEY = "119accacf8b5c738888f26b09f5678f9-us6";
//     const DATACENTER = API_KEY.split("-")[1];

//     const data = {
//       email_address: email,
//       status: "subscribed",
//     };

//     const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
//       body: JSON.stringify(data),
//       headers: {
//         Authorization: `apikey ${API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//     });

//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`,
//       });
//     }

//     return res.status(201).json({ error: "" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// };
