// import { useState } from "react";
// import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

// const contactInfo = [
//   { icon: Mail, value: "kartik.gundla@example.com" },
//   { icon: Phone, value: "+91 930XXX1799" },
//   { icon: MapPin, value: "Solapur, Maharashtra, India" },
//   { icon: Linkedin, value: "linkedin.com/in/kartikgundla" },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("idle");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     try {
//       // Replace this with your Formspree endpoint or EmailJS call.
//       await new Promise((res) => setTimeout(res, 800)); // placeholder
//       setStatus("sent");
//       setForm({ name: "", email: "", message: "" });
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <section id="contact" className="section">
//       <h2 className="section-title">Let's Connect</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="card space-y-4">
//           {contactInfo.map(({ icon: Icon, value }) => (
//             <div key={value} className="flex items-center gap-3">
//               <div className="icon-circle shrink-0">
//                 <Icon size={16} />
//               </div>
//               <span className="text-sm text-muted">{value}</span>
//             </div>
//           ))}

//           <div className="flex items-center gap-3">
//             <div className="icon-circle shrink-0">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
//               </svg>
//             </div>
//             <span className="text-sm text-muted">github.com/kartikgundla</span>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="card space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//               className="bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
//             />
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               required
//               className="bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
//             />
//           </div>
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows={4}
//             required
//             className="w-full bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent resize-none"
//           />
//           <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center">
//             {status === "sending" ? "Sending..." : "Send Message"} <Send size={16} />
//           </button>
//           {status === "sent" && <p className="text-sm text-accent">Message sent — thanks for reaching out!</p>}
//           {status === "error" && <p className="text-sm text-red-400">Something went wrong. Try again.</p>}
//         </form>
//       </div>
//     </section>
//   );
// }

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <div className="flex items-center gap-3">
            <div className="icon-circle shrink-0">
              <Mail size={16} />
            </div>
            <span className="text-sm text-muted">kartik.gundla@example.com</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="icon-circle shrink-0">
              <Phone size={16} />
            </div>
            <span className="text-sm text-muted">+91 930XXX1799</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="icon-circle shrink-0">
              <MapPin size={16} />
            </div>
            <span className="text-sm text-muted">Solapur, Maharashtra, India</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="icon-circle shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
              </svg>
            </div>
            <span className="text-sm text-muted">linkedin.com/in/kartikgundla</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="icon-circle shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <span className="text-sm text-muted">github.com/kartikgundla</span>
          </div>
        </div>

        <form className="card space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            className="w-full bg-bg border border-cardBorder rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent resize-none"
          />
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}