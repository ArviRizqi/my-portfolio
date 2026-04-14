export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 border-t border-white/5"
      style={{ background: "#060b14" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/icon-logo.png" alt="Arvi Rizqi Fadhila" className="w-8 h-8 opacity-70" />
          <div>
            <p className="text-white font-bold text-sm notch-font">Arvi Rizqi Fadhila</p>
            <p className="text-slate-500 text-xs headline-font">Data Analyst · ML Engineer</p>
          </div>
        </div>
        <p className="text-slate-600 text-xs headline-font">
          © {year} Arvi Rizqi Fadhila. Built with Next.js & GSAP.
        </p>
      </div>
    </footer>
  );
}
