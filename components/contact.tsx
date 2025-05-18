"use client";

import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { BiSend } from "react-icons/bi";

import sendEmail from "@/actions/send-email";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 1);
  const [resData, setResData] = useState<unknown>();
  const [sending, setSending] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col gap-y-4 sm:gap-y-6 ">
      <h1 className="sm:text-2xl text-xl font-bold text-center">Contact Me</h1>
      <p className="text-xs sm:text-sm text-center">
        Please contact me directly at{" "}
        <a
          className="underline font-semibold"
          href="mailto:suthararvind757@gmail.com">
          suthararvind757@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <div className="p-[1.5px] rounded-lg bg-gradient-to-b from-[#c6d4ff] to-[#a8ffe3] flex flex-col justify-center items-center">
        <form
          action={async (formData: FormData) => {
            setSending(true);
            const res: unknown = await sendEmail(formData);
            if (res) setSending(false);
            const error: unknown = res;
            setResData(error);
            alert("Message sent successfully!");
          }}
          className="p-4 sm:p-6 rounded-md flex flex-col items-center gap-y-4 sm:gap-y-6 max-w-xl w-full bg-gray-50 bg-opacity-80">
          <input
            type="email"
            disabled={sending}
            name="senderEmail"
            placeholder="Email"
            maxLength={50}
            required
            className="w-full bg-transparent border-2 border-white border-opacity-80 focus:border-opacity-100 px-4 py-2 rounded-md focus:outline-none focus:bg-gray-50 focus:bg-opacity-100 transition"
          />
          <input
            type="text"
            disabled={sending}
            name="subject"
            placeholder="Subject"
            maxLength={100}
            required
            className="w-full bg-transparent border-2 border-white border-opacity-80 focus:border-opacity-100 px-4 py-2 rounded-md focus:outline-none focus:bg-gray-50 focus:bg-opacity-100 transition"
          />
          <textarea
            placeholder="Message"
            disabled={sending}
            name="message"
            rows={4}
            required
            maxLength={500}
            className="w-full bg-transparent border-2 border-white border-opacity-80 focus:border-opacity-100 px-4 py-2 rounded-md focus:outline-none focus:bg-gray-50 focus:bg-opacity-80 transition"
          />
          <button
            type="submit"
            disabled={sending}
            className="group flex items-center justify-center gap-x-2 px-6 py-3 text-sm text-gray-50 font-semibold bg-gray-700 rounded-full w-fit hover:bg-gray-950 transition duration-300 disabled:opacity-50">
            Send
            <BiSend className="-translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1  transition-all -rotate-45" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
