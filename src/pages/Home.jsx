function Home() {
  return (
    <section className="min-h-screen bg-[#0D0B14] text-white px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full border border-purple-500/40 text-purple-300">
          Computer Technology Student
        </span>

        <h1 className="text-4xl font-bold mb-2">Hi, I'm</h1>
        <h1 className="text-5xl font-bold mb-4">
          Kartik <span className="text-purple-400">Gundla</span>
        </h1>

        <p className="text-gray-400 mb-2">
          Diploma Student at Government Polytechnic, Solapur
        </p>

        <p className="text-gray-400 mb-6 leading-relaxed">
          Passionate about coding, building real-world applications and
          learning new technologies. Currently working on Kaarya-Siddhi — a
          Task Management App for Indian Railways.
        </p>

        <div className="flex gap-4 mb-8">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
            View My Work →
          </button>
          <button className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition-colors">
            Download CV ↓
          </button>
        </div>

        <div className="flex gap-4">
          {["LinkedIn", "GitHub", "Mail", "WhatsApp"].map((label) => (
            <div
              key={label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-purple-400 transition-colors cursor-pointer"
            >
              {label[0]}
            </div>
          ))}
        </div>
      </div>

      <div className="w-64 h-64 rounded-full border-4 border-purple-500/30 overflow-hidden">
        <img
          src="/src/assets/hero.png"
          alt="Kartik Gundla"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Home;