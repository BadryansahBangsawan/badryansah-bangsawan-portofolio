import React from "react";

export default function ContactForm() {
  return (
    <form className="flex flex-col space-y-8 overflow-x-hidden mt-10">
      <div className="flex">
        <input
          placeholder="Your name"
          name="name"
          className="w-1/2 mr-4 border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black"
          required
        />
        <input
          placeholder="Your email"
          name="emailSender"
          className="w-1/2 mr-4 border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black"
          required
        />
      </div>
      <textarea
        placeholder="Your message"
        name="message"
        className="w-full border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black"
        required
      />
      <button
        type="submit"
        className="bg-[#f6f2e5] text-[#292929] py-2 px-4 rounded-full"
      >
        Send
      </button>
    </form>
  );
}
