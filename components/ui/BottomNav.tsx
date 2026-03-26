import Link from "next/link";

export default function BottomNav() {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-slate-900/90 backdrop-blur-lg border-t border-slate-700/30 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] rounded-t-2xl">
      <Link href="/dashboard" className="flex flex-col items-center justify-center bg-slate-800 text-secondary-container rounded-xl px-5 py-2 active:scale-90 duration-150">
        <span className="material-symbols-outlined">home</span>
        <span className="font-label text-[11px] font-bold uppercase tracking-wider">
          Home
        </span>
      </Link>
      <Link href="/projects" className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-white transition-all active:scale-90 duration-150">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="font-label text-[11px] font-bold uppercase tracking-wider">
          Categories
        </span>
      </Link>
      <Link href="/alerts" className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-white transition-all active:scale-90 duration-150 relative">
        <span className="material-symbols-outlined">notifications</span>
        <span className="absolute top-2 right-4 w-2 h-2 bg-secondary-container rounded-full"></span>
        <span className="font-label text-[11px] font-bold uppercase tracking-wider">
          Alerts
        </span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-white transition-all active:scale-90 duration-150">
        <span className="material-symbols-outlined">person</span>
        <span className="font-label text-[11px] font-bold uppercase tracking-wider">
          Profile
        </span>
      </Link>
    </footer>
  );
}
