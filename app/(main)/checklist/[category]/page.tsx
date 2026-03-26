import Link from "next/link";
import Image from "next/image";

export default function ChecklistCategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 py-8 space-y-8 pt-24 pb-32">
      {/* Header Section (Breadcrumbs & Title) */}
      <div className="space-y-2 pt-4">
        <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span>Arsitektur</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-secondary font-bold">Pengecatan</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Pengecatan Dinding &amp; Plafond
            </h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl font-medium">
              Inspection list for interior finishes and surface preparation quality control.
            </p>
          </div>
          <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all hover:bg-secondary-container">
            <span className="material-symbols-outlined">add_task</span>
            NEW OBSERVATION
          </button>
        </div>
      </div>

      {/* Filter & Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Filters */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">
                Filter by Status
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border-2 border-outline flex items-center justify-center group-hover:border-secondary transition-colors">
                    <div className="w-2.5 h-2.5 bg-secondary rounded-sm opacity-0"></div>
                  </div>
                  <span className="text-sm font-semibold">Approved</span>
                  <span className="ml-auto text-xs bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant">
                    12
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border-2 border-secondary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-secondary rounded-sm opacity-100"></div>
                  </div>
                  <span className="text-sm font-semibold text-secondary">
                    Needs Revision
                  </span>
                  <span className="ml-auto text-xs bg-secondary-fixed px-2 py-0.5 rounded text-on-secondary-fixed-variant">
                    04
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border-2 border-outline flex items-center justify-center group-hover:border-secondary transition-colors">
                    <div className="w-2.5 h-2.5 bg-secondary rounded-sm opacity-0"></div>
                  </div>
                  <span className="text-sm font-semibold">Submitted</span>
                  <span className="ml-auto text-xs bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant">
                    08
                  </span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">
                Priority Level
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-error text-error bg-error-container/20">
                  HIGH
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-outline text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">
                  MEDIUM
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-outline text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">
                  LOW
                </button>
              </div>
            </div>

            <button className="w-full py-2 text-xs font-black text-on-surface-variant underline underline-offset-4 hover:text-primary transition-colors">
              CLEAR ALL FILTERS
            </button>
          </div>

          {/* Stats Card */}
          <div className="bg-primary text-white p-6 rounded-xl shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                Completion Rate
              </p>
              <h4 className="text-4xl font-black mt-1">74%</h4>
              <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary-container w-3/4"></div>
              </div>
              <p className="text-[11px] mt-4 font-medium opacity-80 leading-relaxed">
                24 of 32 items verified for Block A - Painting phase.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span
                className="material-symbols-outlined text-8xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
            </div>
          </div>
        </div>

        {/* Task List (Main Content) */}
        <div className="md:col-span-9 space-y-4">
          {/* Task Header (Sorting) */}
          <div className="hidden md:flex items-center px-6 py-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
            <div className="w-1/2">Task Description</div>
            <div className="w-1/6 text-center">Priority</div>
            <div className="w-1/6 text-center">Status</div>
            <div className="w-1/6 text-right">Deadline</div>
          </div>

          {/* Task Item 1 */}
          <div className="group bg-surface-container-lowest rounded-xl p-5 md:p-6 transition-all hover:translate-x-1 border-l-4 border-error shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-full md:w-1/2 space-y-1">
              <h4 className="text-lg font-bold text-primary leading-tight">
                Wall Surface Leveling - Zone 4 Lobby
              </h4>
              <p className="text-sm text-on-surface-variant font-medium">
                Verification of substrate smoothness before primer application.
              </p>
            </div>
            <div className="flex items-center justify-between w-full md:w-1/2">
              <div className="md:w-1/3 flex justify-center">
                <span className="px-3 py-1 rounded bg-error-container text-on-error-container text-[10px] font-black tracking-widest uppercase">
                  High
                </span>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <span className="px-3 py-1 rounded bg-error-container/30 text-on-error-container text-[10px] font-black tracking-widest uppercase border border-error/20">
                  Needs Revision
                </span>
              </div>
              <div className="md:w-1/3 text-right flex flex-col md:block">
                <span className="text-[10px] md:hidden font-black uppercase tracking-tighter text-on-surface-variant opacity-60">
                  Due Date
                </span>
                <span className="font-mono text-sm font-bold text-primary">
                  24 OCT 2023
                </span>
              </div>
            </div>
            <Link href="/checklist/detail/1" className="w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center gap-2 px-4 py-2 rounded bg-surface-container-low text-primary text-xs font-black uppercase tracking-wider hover:bg-secondary hover:text-white transition-all">
              Details
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Task Item 2 */}
          <div className="group bg-surface-container-lowest rounded-xl p-5 md:p-6 transition-all hover:translate-x-1 border-l-4 border-outline-variant shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-full md:w-1/2 space-y-1">
              <h4 className="text-lg font-bold text-primary leading-tight">
                Primer Coat Uniformity - Corridors
              </h4>
              <p className="text-sm text-on-surface-variant font-medium">
                Checking for consistent thickness and lack of holidays.
              </p>
            </div>
            <div className="flex items-center justify-between w-full md:w-1/2">
              <div className="md:w-1/3 flex justify-center">
                <span className="px-3 py-1 rounded bg-surface-container-highest text-primary text-[10px] font-black tracking-widest uppercase">
                  Medium
                </span>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <span className="px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-black tracking-widest uppercase">
                  Submitted
                </span>
              </div>
              <div className="md:w-1/3 text-right flex flex-col md:block">
                <span className="text-[10px] md:hidden font-black uppercase tracking-tighter text-on-surface-variant opacity-60">
                  Due Date
                </span>
                <span className="font-mono text-sm font-bold text-primary">
                  26 OCT 2023
                </span>
              </div>
            </div>
            <Link href="/checklist/detail/2" className="w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center gap-2 px-4 py-2 rounded bg-surface-container-low text-primary text-xs font-black uppercase tracking-wider hover:bg-secondary hover:text-white transition-all">
              Details
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Task Item 3 */}
          <div className="group bg-surface-container-lowest rounded-xl p-5 md:p-6 transition-all hover:translate-x-1 border-l-4 border-tertiary-fixed-dim shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-full md:w-1/2 space-y-1">
              <h4 className="text-lg font-bold text-primary leading-tight">
                Ceiling Scaffolding Safety Check
              </h4>
              <p className="text-sm text-on-surface-variant font-medium">
                Safety clearance before painters begin upper sections.
              </p>
            </div>
            <div className="flex items-center justify-between w-full md:w-1/2">
              <div className="md:w-1/3 flex justify-center">
                <span className="px-3 py-1 rounded bg-surface-container-highest text-primary text-[10px] font-black tracking-widest uppercase">
                  Low
                </span>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <span className="px-3 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-black tracking-widest uppercase">
                  Approved
                </span>
              </div>
              <div className="md:w-1/3 text-right flex flex-col md:block">
                <span className="text-[10px] md:hidden font-black uppercase tracking-tighter text-on-surface-variant opacity-60">
                  Due Date
                </span>
                <span className="font-mono text-sm font-bold text-primary">
                  22 OCT 2023
                </span>
              </div>
            </div>
            <Link href="/checklist/detail/3" className="w-full md:w-auto mt-2 md:mt-0 flex items-center justify-center gap-2 px-4 py-2 rounded bg-surface-container-low text-primary text-xs font-black uppercase tracking-wider hover:bg-secondary hover:text-white transition-all">
              Details
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Empty State Space */}
          <div className="py-12 flex flex-col items-center justify-center text-on-surface-variant opacity-20 select-none">
            <span className="material-symbols-outlined text-6xl">
              inventory_2
            </span>
            <p className="font-black uppercase tracking-widest mt-2">
              End of List
            </p>
          </div>
        </div>
      </div>
      
      {/* Contextual FAB (Only on Mobile) */}
      <button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-secondary text-on-secondary rounded-xl shadow-2xl flex items-center justify-center z-40 active:scale-90 transition-transform hover:bg-secondary-container">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </main>
  );
}
