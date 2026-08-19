import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Reveal from "../components/Reveal";
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    // Opens the user's email client with prefilled content — no backend needed
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:kartik.gundla@example.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
  };

  return (
    <section id="contact" className="section">
      <div className="w-full">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left: info panel */}
          <Reveal type="slideLeft">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">Get In Touch</h3>
              <p className="text-muted leading-relaxed mb-8">
                Feel free to reach out through any of the channels below.
                I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Mail className="text-accent2" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase">Email Address</p>
                    <p className="font-medium text-white">kartik.gundla@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone className="text-accent2" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase">Phone Contact</p>
                    <p className="font-medium text-white">+91 93XXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent2" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase">Location</p>
                    <p className="font-medium text-white">Solapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          {/* Right: form */}
          <Reveal type="slideRight" delay={0.15}>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-cardBorder rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-cardBorder rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-cardBorder rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <Send size={16} />
                </button>

                {status && (
                  <p className="text-sm text-accent2 text-center">{status}</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}