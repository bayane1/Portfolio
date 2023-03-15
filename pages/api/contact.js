

/**
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response
 */

import { mailOptions, transporter } from "../../util/nodemailer";

const contact = async (req, res) => {

  if (req.method == 'POST') {
  
    const data = req.body;
    if (!data || !data.name || !data.email || !data.sujet || !data.message) {
      return res.status(400).send({ message: "Bad request" });

    }
    console.log(data);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject:  "Contact de la part de " +  data.name + " - Sujet : " + data.sujet ,
        text: "This is a test string",
        html: "<h1>Test Title</h1><p>Some body tesxt</p>",

      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({

      });

    }

  } else {
    response.setHeader('Allow', 'POST');
    response.status(405).end();
  }

}
export default contact