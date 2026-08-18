function About() {
  const infoItems = [
    { label: "Location", value: "Solapur, Maharashtra, India" },
    { label: "Department", value: "Computer Technology" },
    { label: "Status", value: "Student" },
    { label: "Year", value: "2nd Year" },
  ];

  const traits = [
    { title: "Problem Solver", desc: "I love solving logic based problems." },
    { title: "Team Player", desc: "I enjoy working in teams & collaborating." },
    { title: "Quick Learner", desc: "I quickly adapt to new technologies." },
    { title: "Detail Oriented", desc: "I focus on writing clean & efficient code." },
  ];

  return (
    <section className="min-h-screen bg-[#0D0B14] text-white px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">About Me</h1>

      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Left: quote + short bio */}
        <div className="md:col-span-2">
          <blockquote className="text-xl text-purple-300 italic border-l-2 border-purple-500 pl-4 mb-6">
            "Code with Purpose, Build for Impact."
          </blockquote>

          <p className="text-gray-400 leading-relaxed">
            I'm Kartik Gundla, a 2nd Year Diploma student in Computer
            Technology at Government Polytechnic, Solapur. I enjoy turning
            ideas into code and building solutions that solve real-world
            problems.
          </p>
        </div>

        {/* Right: compact info sidebar */}
        <div className="bg-[#15121F] border border-white/10 rounded-xl p-5 space-y-4 h-fit">
          {infoItems.map((item) => (
            <div key={item.label}>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-sm text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trait cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {traits.map((trait) => (
          <div
            key={trait.title}
            className="bg-[#15121F] border border-white/10 rounded-xl p-5 hover:border-purple-500/40 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">{trait.title}</h3>
            <p className="text-sm text-gray-400">{trait.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;