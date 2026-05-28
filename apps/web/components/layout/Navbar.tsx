import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="font-bold text-xl text-slate-900">
          AL BATAL
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-slate-600">
          <Link href="/">الرئيسية</Link>
          <Link href="/chat">الشات</Link>
          <Link href="#">الميزات</Link>
          <Link href="#">التسعير</Link>
        </nav>

        {/* CTA */}
        <div>
          <button className="px-5 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90">
            ابدأ الآن
          </button>
        </div>

      </div>
    </header>
  );
}