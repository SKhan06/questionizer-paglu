import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks ${
        form.name || "Paglu"
      }! 😂 Your message has been sent.We’ll totally read it (probably while eating Maggi 🍜 or crying before exams 📚).`
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white  p-8 max-w-3xl w-full">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-[#009dff] mb-4">
          Contact Questionizer Paglu 📬
        </h1>

        {/* Funny Description */}
        <p className=" text-gray-600 mb-6 leading-relaxed">
          Welcome to the <span className="font-semibold">Contact Us</span> page
          of{" "}
          <span className="text-[#009dff] font-semibold">
            Questionizer Paglu
          </span>{" "}
          – the only place where sending a message feels like submitting an
          assignment: late, half serious, but still appreciated 😅.
          <br />
          <br />
          Have a doubt? Want to roast JavaScript for being paglu? Or maybe you
          just want to confess that you also eat{" "}
          <span className="font-semibold">
            Maggi at 2 AM before exams 🍜🔥
          </span>{" "}
          – this is the place.
          <br />
          <br />
          We accept all types of messages:
          <br /> • <strong>Serious queries</strong>: “How do I use React hooks?”
          <br /> • <strong>Paglu queries</strong>: “Why my WiFi works perfectly
          until exam time?”
          <br /> • <strong>Life questions</strong>: “Why does my crush leave me
          on seen even after I send memes? 💔😂”
          <br />
          <br />
          Don’t worry, we actually read your messages… mostly while half asleep
          💤 or while debugging code with 100 console.logs. If your question is
          truly legendary, we might even feature it in our{" "}
          <span className="text-[#7e1f86] font-semibold">
            Paglu Hall of Fame 🏆
          </span>
          .
          <br />
          <br />
          <strong>Pro Tips before filling the form</strong>:
          <br /> 1. Don’t use “asdfgh” as your name (we know you, paglu).
          <br /> 2. Don’t enter your fake Gmail like <i>
            ilovemycrush@xyz.com
          </i>{" "}
          (unless you really do).
          <br /> 3. Messages about free biryani or Maggi sponsorships will be
          replied fastest 🥘.
          <br />
          <br />
          So go ahead, fill the form below. Whether you’re a coding wizard 🧙‍♂️, a
          SEM survivor 📚, or just a curious paglu 🤪 – we’d love to hear from
          you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name (don’t write “Paglu” 😂)
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#009dff] focus:outline-none"
              placeholder="Enter your awesome name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email (we won’t spam… maybe 👀)
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#009dff] focus:outline-none"
              placeholder="Enter your Gmail"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message (no exam timetable pls 😭)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#009dff] focus:outline-none"
              placeholder="Write your paglu message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#009dff] text-white py-2 rounded-md font-medium hover:bg-[#007acc] transition"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Funny footer */}
        <p className="text-xs text-gray-500 mt-6 ">
          Disclaimer: We might reply while half asleep 💤 or during Maggi break
          🍜. But don’t worry – paglu support is 24/7 in our hearts ❤️.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
