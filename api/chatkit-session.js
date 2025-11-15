import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const session = await client.chatkit.sessions.create({
      workflow: { id: "wf_691829278bd081908bfc166032c825c30fa29e348f017bce" },
      user: "sq-user-" + Date.now(),
    });

    res.status(200).json({
      client_secret: session.client_secret,
    });
  } catch (error) {
    console.error("ChatKit Session Error:", error);
    res.status(500).json({ error: "Failed to create ChatKit session." });
  }
}
