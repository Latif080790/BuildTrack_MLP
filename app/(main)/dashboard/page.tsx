import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="pt-24 pb-32 px-4 md:px-10 max-w-[1440px] mx-auto min-h-screen relative">
      {/* Dashboard Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="space-y-1">
          <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs">
            Site Status: Active
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-primary">
            Skyline Tower Phase II
          </h1>
          <p className="text-on-surface-variant max-w-xl">
            Project overview and compliance monitoring for structural, architectural, and mechanical systems.
          </p>
        </div>
        <button className="bg-primary hover:bg-primary-container text-on-primary py-4 px-8 rounded-lg font-headline font-bold flex items-center gap-2 transition-all active:scale-95 shadow-xl shadow-primary/20">
          <span className="material-symbols-outlined">add_circle</span>
          New Observation
        </button>
      </div>

      {/* Top Row: Progress Summary & Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 relative z-10">
        {/* Global Progress Card */}
        <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between border-l-8 border-primary">
          <div>
            <h3 className="font-headline font-bold text-lg text-primary-container">
              Overall Progress
            </h3>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-7xl font-headline font-black text-primary">
                51
              </span>
              <span className="text-2xl font-headline font-bold text-on-surface-variant">
                %
              </span>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[51%]"></div>
            </div>
            <div className="flex justify-between text-xs font-label font-bold uppercase tracking-tighter text-on-surface-variant">
              <span>Foundation &amp; Slab</span>
              <span>Fit-out &amp; Finish</span>
            </div>
          </div>
        </div>

        {/* Category Breakdown Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/projects/sipil" className="block bg-surface-container-low p-6 rounded-xl flex-col justify-between border-t-4 border-primary hover:bg-surface-container transition-colors cursor-pointer flex">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-surface-variant rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  architecture
                </span>
              </div>
              <span className="font-headline font-bold text-xl text-primary">
                80%
              </span>
            </div>
            <div className="mt-6">
              <span className="block text-xs font-label font-bold uppercase text-on-surface-variant">
                Sipil
              </span>
              <div className="mt-2 w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%]"></div>
              </div>
            </div>
          </Link>

          <Link href="/projects/arsitektur" className="block bg-surface-container-low p-6 rounded-xl flex-col justify-between border-t-4 border-primary/60 hover:bg-surface-container transition-colors cursor-pointer flex">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-surface-variant rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/80">
                  home_work
                </span>
              </div>
              <span className="font-headline font-bold text-xl text-primary/80">
                65%
              </span>
            </div>
            <div className="mt-6">
              <span className="block text-xs font-label font-bold uppercase text-on-surface-variant">
                Arsitektur
              </span>
              <div className="mt-2 w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 w-[65%]"></div>
              </div>
            </div>
          </Link>

          <Link href="/projects/mep" className="block bg-surface-container-low p-6 rounded-xl flex-col justify-between border-t-4 border-secondary hover:bg-surface-container transition-colors cursor-pointer flex">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-surface-variant rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">
                  bolt
                </span>
              </div>
              <span className="font-headline font-bold text-xl text-secondary">
                40%
              </span>
            </div>
            <div className="mt-6">
              <span className="block text-xs font-label font-bold uppercase text-on-surface-variant">
                MEP
              </span>
              <div className="mt-2 w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[40%]"></div>
              </div>
            </div>
          </Link>

          <Link href="/projects/interior" className="block bg-surface-container-low p-6 rounded-xl flex-col justify-between border-t-4 border-outline hover:bg-surface-container transition-colors cursor-pointer flex">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-surface-variant rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">
                  chair
                </span>
              </div>
              <span className="font-headline font-bold text-xl text-outline">
                20%
              </span>
            </div>
            <div className="mt-6">
              <span className="block text-xs font-label font-bold uppercase text-on-surface-variant">
                Interior
              </span>
              <div className="mt-2 w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-outline w-[20%]"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Split: Urgent Tasks & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left: Urgent Tasks */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-8 border-b-2 border-primary pb-4">
            <h2 className="font-headline font-black text-2xl tracking-tighter uppercase flex items-center gap-2">
              <span
                className="material-symbols-outlined text-error"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
              Urgent Tasks
            </h2>
            <span className="bg-error-container text-on-error-container px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
              3 Actions Required
            </span>
          </div>

          <div className="space-y-6">
            {/* Task Item 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl group transition-all hover:bg-white border border-transparent hover:border-outline-variant/30 shadow-sm flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-error-container flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-on-error-container">
                  water_drop
                </span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">
                      Foundation Leakage - Zone B4
                    </h4>
                    <p className="text-on-surface-variant text-sm mt-1">
                      Groundwater seepage detected in elevator pit. Waterproofing integrity check required.
                    </p>
                  </div>
                  <span className="text-xs font-label font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded uppercase">
                    MEP
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img
                      alt="avatar 1"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdfOPTmGoZROwtlGFFwOnJFzZO1b7DAc6qqGjrlOtzoyaG0-1muFginAv80ifTXVPtSt3xKcUVHqlCgN7DFRSLWBojhOVwAdusDt6RZl_SCsxBjHTeIQv8tQ4AKrFJNUUeJFEgadV0ST95fiqw3rheTMBL21M3yYBF0tdKHTsuUeaBaHcxUQm6Hf9zlsIVYaBFT4BP6N1TigYRgW2no68jxuKyGyor52MB_pNtKzH2hD3Pn5AeFmUY7B4YmTo1esFbH7kschpHQ9E"
                    />
                    <img
                      alt="avatar 2"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUPPly5Ndb3Vs4Eb0NEwDaO-H_Xq0rP_-N89OIfqKT3EvLkUN2TKxFaI0Gwc9XEoHjjLUODAN_PuGGNS_9VH1y33lDfSJkN1SNWW4dkYFOaHWFs28hE9efKukzgMB32jcsl1Ralr9zT3L4GIIRdc3Tj0VD4WDm3IkCclJoqWBa4AvU4QXbp4hvRGhzfcWleaycEqIvsDepcws83zC1Fai6j_JsriCneqNue6wH3tZvSaa1lCeMOSNYgx_qEqxA8eD99W-m28zx4kQ"
                    />
                  </div>
                  <Link href="/checklist/detail/1" className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-1 hover:underline">
                    View Details{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Task Item 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl group transition-all hover:bg-white border border-transparent hover:border-outline-variant/30 shadow-sm flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg text-secondary">
                <span className="material-symbols-outlined">straighten</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline font-bold text-primary text-lg">
                      Curtain Wall Alignment
                    </h4>
                    <p className="text-on-surface-variant text-sm mt-1">
                      Deviation of 5mm detected on Level 12 east wing facade.
                      Realignment before glass installation.
                    </p>
                  </div>
                  <span className="text-xs font-label font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded uppercase">
                    Arsitektur
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-error text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>{" "}
                    Due in 4 hours
                  </span>
                  <Link href="/checklist/detail/2" className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-1 hover:underline">
                    View Details{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Recent Activity Feed */}
        <div className="lg:col-span-5 bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary">
          <h2 className="font-headline font-black text-2xl tracking-tighter uppercase mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined">history</span>
            Recent Activity
          </h2>
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-outline-variant/20"></div>

            {/* Activity Item 1 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-tertiary-fixed rounded-full flex items-center justify-center border-4 border-surface-container-low">
                <span
                  className="material-symbols-outlined text-on-tertiary-fixed-variant text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  14:32 • Sipil
                </span>
                <h5 className="font-bold text-primary">
                  Column Reinforcement Approved
                </h5>
                <p className="text-sm text-on-surface-variant mt-1">
                  Structural engineer signed off on Zone A reinforcement bar
                  layout. Ready for casting.
                </p>
                <div className="mt-3 bg-surface-container-highest/50 p-2 rounded flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded overflow-hidden">
                    <img
                      alt="Inspection photo"
                      className="w-full h-full object-cover grayscale opacity-50 block"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDsAQ3erZuUjbW_EWpJ_gmB_ITROFLKBgaBIWkofjOzIXzOPyhDmH6x9U9d94FsFRs2FtV2CjVcAoXBOsZ7d_50TBPG8-celMuyATpytDmum8xVdgbtFEafkQpQ6Cg9p33yKCKmTs6THQ5jLQaxdCmFiwHe-DTpAMvCLLAJLmYC96mfUxINsaw4s-4ejBtIT2GaCEgnDPl_CpfaRFEHjkqih11P-dbXJcuAnIikh9ESRP7WEYhCKPJ4JBglBFx0vv5MSe2r4TF0Q8"
                    />
                  </div>
                  <span className="text-xs font-label italic text-on-surface-variant">
                    inspection_photo_ZA_402.jpg
                  </span>
                </div>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary-fixed rounded-full flex items-center justify-center border-4 border-surface-container-low">
                <span className="material-symbols-outlined text-on-primary-fixed-variant text-sm">
                  assignment_turned_in
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  11:05 • MEP
                </span>
                <h5 className="font-bold text-primary">
                  HVAC Ducting Submission
                </h5>
                <p className="text-sm text-on-surface-variant mt-1">
                  Main contractor submitted shop drawings for Level 5-8
                  ventilation layout.
                </p>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-error-container rounded-full flex items-center justify-center border-4 border-surface-container-low">
                <span className="material-symbols-outlined text-on-error-container text-sm">
                  report_problem
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  09:15 • Safety
                </span>
                <h5 className="font-bold text-primary">
                  Safety Violation Recorded
                </h5>
                <p className="text-sm text-on-surface-variant mt-1">
                  Missing fall protection on north scaffolding. Corrective
                  action issued to subcontractor.
                </p>
                <span className="mt-2 inline-block px-2 py-0.5 bg-error text-on-error text-[10px] font-bold uppercase rounded">
                  Critical
                </span>
              </div>
            </div>
          </div>

          <button className="w-full mt-12 py-3 border border-outline/30 rounded font-bold uppercase text-xs tracking-widest text-on-surface-variant hover:bg-surface-variant/40 transition-colors">
            View Full Audit Log
          </button>
        </div>
      </div>
    </main>
  );
}
