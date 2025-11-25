export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-50 pb-15 bg-gradient-to-t from-[#0a0f1f] via-[#0d1228] to-[#0b1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-36">
            <img src="/light-logo.png" alt="logo" />
          </div>
        </div>
        <p className="text-[15px]">Copyright © {year} Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
}
