import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12 pt-24 pb-32 relative z-10">
      {/* Section 1: Active Projects Grid */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-primary">
              Active Projects
            </h1>
            <p className="text-on-surface-variant text-lg">
              Select a project to manage observations, site reports, and safety protocols.
            </p>
          </div>
          <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined">add</span>
            NEW PROJECT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card A */}
          <div className="group bg-surface-container-lowest rounded-xl p-1 transition-all hover:bg-primary cursor-pointer shadow-sm">
            <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col justify-between h-full space-y-8 transition-transform group-hover:-translate-y-1">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Active
                  </span>
                  <span className="text-on-surface-variant font-mono text-sm">
                    #PRJ-2401
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Project A: Luxury Villa
                </h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span className="text-sm">Bukit Peninsula, Bali</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary-container h-full w-3/4"></div>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-on-surface-variant">75% COMPLETE</span>
                  <span className="text-primary">128 TASKS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card B (Selected) */}
          <div className="group bg-primary rounded-xl p-1 shadow-2xl shadow-slate-900/10 cursor-pointer">
            <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col justify-between h-full space-y-8">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Selected
                  </span>
                  <span className="text-on-surface-variant font-mono text-sm">
                    #PRJ-2402
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Project B: Office Renovation
                </h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span className="text-sm">Central District, Jakarta</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary-container h-full w-1/3"></div>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-on-surface-variant">32% COMPLETE</span>
                  <span className="text-primary">45 TASKS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card C */}
          <div className="group bg-surface-container-lowest rounded-xl p-1 transition-all hover:bg-primary cursor-pointer shadow-sm">
            <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col justify-between h-full space-y-8 transition-transform group-hover:-translate-y-1">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Pending
                  </span>
                  <span className="text-on-surface-variant font-mono text-sm">
                    #PRJ-2405
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Project C: High-Rise Hotel
                </h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span className="text-sm">Nusa Dua, Bali</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-surface-container-highest h-full w-0"></div>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-on-surface-variant">0% COMPLETE</span>
                  <span className="text-primary">210 TASKS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Category Selection (Appears when Project Selected) */}
      <section className="pt-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-10 w-2 bg-secondary rounded-full"></div>
          <h2 className="text-3xl font-black tracking-tight text-primary uppercase">
            Categories: Project B
          </h2>
        </div>

        {/* Bento Grid Category Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sipil */}
          <Link href="/checklist/sipil" className="group relative overflow-hidden bg-surface-container-low p-8 rounded-xl text-left transition-all hover:bg-primary active:scale-95 flex flex-col justify-between h-72 cursor-pointer shadow-sm border border-transparent hover:border-primary/50">
            <div className="bg-surface-variant w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">
                foundation
              </span>
            </div>
            <div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-2">
                Sipil
              </h4>
              <p className="text-on-surface-variant group-hover:text-slate-300 font-bold text-sm">
                12 TASKS REMAINING
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary group-hover:text-white">
                foundation
              </span>
            </div>
          </Link>

          {/* Arsitektur */}
          <Link href="/checklist/arsitektur" className="group relative overflow-hidden bg-surface-container-low p-8 rounded-xl text-left transition-all hover:bg-primary active:scale-95 flex flex-col justify-between h-72 cursor-pointer shadow-sm border border-transparent hover:border-primary/50">
            <div className="bg-surface-variant w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">
                architecture
              </span>
            </div>
            <div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-2">
                Arsitektur
              </h4>
              <p className="text-on-surface-variant group-hover:text-slate-300 font-bold text-sm">
                8 TASKS REMAINING
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary group-hover:text-white">
                architecture
              </span>
            </div>
          </Link>

          {/* MEP */}
          <Link href="/checklist/mep" className="group relative overflow-hidden bg-surface-container-low p-8 rounded-xl text-left transition-all hover:bg-primary active:scale-95 flex flex-col justify-between h-72 border-2 border-secondary/20 hover:border-transparent cursor-pointer shadow-sm">
            <div className="bg-secondary w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-lg shadow-secondary/20">
              <span className="material-symbols-outlined text-3xl text-white">
                bolt
              </span>
            </div>
            <div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-2">
                MEP
              </h4>
              <p className="text-secondary group-hover:text-secondary-fixed font-bold text-sm">
                24 TASKS REMAINING
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary group-hover:text-white">
                bolt
              </span>
            </div>
          </Link>

          {/* Interior */}
          <Link href="/checklist/interior" className="group relative overflow-hidden bg-surface-container-low p-8 rounded-xl text-left transition-all hover:bg-primary active:scale-95 flex flex-col justify-between h-72 cursor-pointer shadow-sm border border-transparent hover:border-primary/50">
            <div className="bg-surface-variant w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">
                chair
              </span>
            </div>
            <div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-2">
                Interior
              </h4>
              <p className="text-on-surface-variant group-hover:text-slate-300 font-bold text-sm">
                ALL TASKS COMPLETE
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-primary group-hover:text-white">
                chair
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Visualization (Editorial Style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8">
        <div className="bg-primary p-12 rounded-xl text-white space-y-8 flex flex-col justify-center shadow-xl">
          <h2 className="text-5xl font-black tracking-tight leading-none uppercase">
            Real-Time<br />
            <span className="text-secondary-container">Utility</span>
          </h2>
          <p className="text-slate-400 max-w-sm body-lg">
            Our blueprint-first approach ensures every observation is categorized with surgical precision, reducing inspection time by 40%.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <div className="text-4xl font-bold">142</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
                Pending Sync
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold">08</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
                Critical Issues
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden relative min-h-[400px] shadow-xl">
          <img
            className="w-full h-full object-cover"
            alt="industrial view"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76rZlUUVZCLayG8-8jsPwi80h9-ov0yesEwkiXpVRHKoRfBrqoZrwWmDxI91h2FXQ0JtODJM6J1TVJKRKF8DHcH28_fnzwLqTN5Fhxx4bVNqFtGv7LxfBCgSx5KDZ4FYnSXaCfWIVSCqZ4oIeVKMuKziz9r6btuspDaGfo0gBdN2RqraoOXYAdwRGTVriiq7yFNVvnuPXgIGKvvw-jmhmlTwpccRz3x3mg6Hty4uFvEObm_Oz0INDO4gVRSQm3_tq50-l7GeOzk4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-lg">
              <p className="text-white italic font-medium">
                "Precision in the field translates to perfection in the finish. Manage every detail through the BuildTrack shell."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
