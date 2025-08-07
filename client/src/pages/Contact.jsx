import React from "react";

function Contact() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" rows="4" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-chocolate text-cream px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact;
