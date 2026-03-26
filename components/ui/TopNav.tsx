import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-slate-800/80 backdrop-blur-xl shadow-2xl shadow-slate-950/20 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-white/5">
      <div className="flex items-center gap-8">
        <span className="text-xl md:text-2xl font-black text-white tracking-tighter font-headline">
          BuildTrack
        </span>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/dashboard"
            className="font-headline font-bold tracking-tight text-secondary-container border-b-2 border-secondary-container pb-1"
          >
            Dashboard
          </Link>
          <Link
            href="/projects"
            className="font-headline font-bold tracking-tight text-slate-300 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/reports"
            className="font-headline font-bold tracking-tight text-slate-300 hover:text-white transition-colors"
          >
            Reports
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center bg-slate-700/50 rounded-lg px-3 py-1 text-slate-300">
          <span className="material-symbols-outlined text-sm mr-2">search</span>
          <span className="text-xs font-label">Search project specs...</span>
        </div>
        <span className="material-symbols-outlined text-slate-300 hover:bg-slate-700/50 rounded-lg transition-all p-2 cursor-pointer active:scale-95 duration-200">
          notifications
        </span>
        <span className="material-symbols-outlined hidden md:block text-slate-300 hover:bg-slate-700/50 rounded-lg transition-all p-2 cursor-pointer active:scale-95 duration-200">
          settings
        </span>
        <img
          alt="User profile avatar"
          className="w-8 h-8 rounded-full border border-slate-600 ml-2 object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN0FUNOJekwRquB7VqO86d1RgdzjdB65rzlNhA1gmvS8-5m4pljhI4njJMESPXTzVpm-BCSYecBdf1ZB6kxRTYuDrm3o26GLgib8_xdvzNuYynt1jRhjddPgtRVrYv_IDQ21LZP9rLyRXM-f3xMJ1TH8iCg4h1vpg1T4SuofFYOpDflTpTITJZr1G8-YUZSrLP8cljrXSGOvA9Fy7Iq7k491MC12AVJt4ys4xmWgVxtrTX6U_rz4Vp-wEPaJC8KZoHFQ3sQoZisrU"
        />
      </div>
    </header>
  );
}
