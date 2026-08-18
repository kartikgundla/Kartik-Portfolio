import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, value: "kartik.gundla@example.com" },
  { icon: Phone, value: "+91 930XXX1799" },
  { icon: MapPin, value: "Solapur, Maharashtra, India" },
  { icon: Linkedin, value: "linkedin.com/in/kartikgundla" },
  { icon: Github, value: "github.com/kartikgundla" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace this with your Formspree endpoint or EmailJS call.
      // Example with Formspree:
      // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { Accept: "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((res) => setTimeout(res, 800)); // placeholder
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-4">
          {contactInfo.map(({ icon: Icon, value }) => (
            <div key={value} className="flex items-center gap-3">
              <div className="icon-circle shrink-0">
                <Icon size={16} />
              </div>
              <span className="text-sm text-muted">{value}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className="w-full bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent resize-none"
          />
          <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center">
            {status === "sending" ? "Sending..." : "Send Message"} <Send size={16} />
          </button>
          {status === "sent" && (
            <p className="text-sm text-accent">Message sent — thanks for reaching out!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
