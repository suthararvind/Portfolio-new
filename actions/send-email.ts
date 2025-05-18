"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Track the timestamp of the last message sent
let lastMessageSentTime: number | null = null;

const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = senderEmail + "___" + formData.get("subject");
  const message = formData.get("message");
  const currentTime = Date.now();

  if (
    !senderEmail ||
    typeof senderEmail !== "string" ||
    senderEmail.length > 50
  ) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!subject || typeof subject !== "string" || subject.length > 100) {
    return {
      error: "Invalid subject",
    };
  }

  if (!message || typeof message !== "string" || message.length > 500) {
    return {
      error: "Invalid message",
    };
  }

  if (
    lastMessageSentTime &&
    currentTime - lastMessageSentTime < 10 * 60 * 1000
  ) {
    return {
      error: "Please wait for 5 minutes before sending another message.",
    };
  }

  try {
    const res = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "suthararvind757@gmail.com",
      subject: subject,
      reply_to: senderEmail,
      text: message,
    });

    console.log(res);

    lastMessageSentTime = currentTime;

    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    }
  }
};

export default sendEmail;
