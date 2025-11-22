// server/routes/contact.js
import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM,   // Your verified sender
      to: process.env.RESEND_FROM,     // You receive the email
      reply_to: email,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    console.log("✅ Email sent successfully via Resend:", data);
    res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
