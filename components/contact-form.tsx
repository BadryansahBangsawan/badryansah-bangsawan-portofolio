"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    emailSender: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `Halo! Saya ${formData.name} (${formData.emailSender}).

Pesan saya:
${formData.message}

---
Dikirim dari portfolio website Badryansah Bangsawan`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/6285244304050?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-8 overflow-x-hidden mt-10"
    >
      <div className="flex">
        <input
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-1/2 mr-4 border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black"
          required
        />
        <input
          placeholder="Your email"
          name="emailSender"
          type="email"
          value={formData.emailSender}
          onChange={handleInputChange}
          className="w-1/2 mr-4 border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black"
          required
        />
      </div>
      <textarea
        placeholder="Your message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        className="w-full border-b-2 border-[#f6f2e5] bg-[#292929] placeholder-[#f6f2e5] focus:outline-none focus:border-b-2 focus:border-black"
        required
        rows={5}
      />

      <button
        type="submit"
        className="bg-[#f6f2e5] text-[#292929] py-2 px-4 rounded-full transition-all duration-200 hover:bg-[#e8e0d0] hover:scale-105"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
