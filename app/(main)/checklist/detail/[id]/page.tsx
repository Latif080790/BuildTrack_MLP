import Link from "next/link";
import Image from "next/image";

export default function ChecklistDetailItemPage() {
  return (
    <main className="pt-24 pb-32 max-w-6xl mx-auto px-6 md:px-10">
      {/* Header Section: Asymmetric Layout */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
              ID: ARCH-204-01
            </span>
            <span className="bg-error-container text-on-error-container text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
              High Priority
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-primary leading-none mb-4">
            Steel Reinforcement Inspection - Zone B4
          </h1>
          <p className="text-lg text-on-surface-variant font-body max-w-xl">
            Comprehensive audit of structural rebar layout before concrete pouring.
            Verification against blueprint Rev. 4.2 required.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col gap-4 bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant block mb-1">
              Deadline
            </span>
            <div className="flex items-center gap-2 text-primary font-headline font-bold text-xl">
              <span className="material-symbols-outlined">calendar_today</span>
              Oct 24, 2023 · 14:00
            </div>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant block mb-1">
              Assigned To
            </span>
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 rounded-full object-cover"
                alt="Corporate headshot of an engineer in a blue shirt"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmxM2VOPOLnF698iHi8eIZ8q3Kuqaa-2_uWQ3ehDcawDenFG0OVn5613i1ZmFSE7pJgxEusosyO_ecdD2JrLTd1UHs8n1VGMSn6xpTxWDHHPd7lUrOBmvqZJvNgQ4QaoZPsPxqDuHmWAq92oi9HQ7NWtKzWRnP8X0XUoUhnjB4PDuBZT3JbkKhbXK7L_iZ--s_u4Xy_bwK1LzC3CmCOYMI_OyRoBJWDQ2vhNtNFG1d-fUzDh_9IMoce6U1Y-Hwr5QA-7HFPbhCMMM"
              />
              <span className="text-primary font-bold">Marcus Thorne</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Checklist & Media */}
        <div className="lg:col-span-8 space-y-12">
          {/* Interactive Checklist */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary">
            <h2 className="text-xl font-black uppercase tracking-tight text-primary mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined">fact_check</span> 
              Inspection Checklist
            </h2>
            <div className="space-y-6">
              <label className="flex items-start gap-4 group cursor-pointer">
                <input
                  className="mt-1 w-6 h-6 rounded border-outline-variant text-primary focus:ring-secondary transition-all"
                  type="checkbox"
                />
                <div className="flex-1">
                  <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    Rebar spacing verification
                  </span>
                  <p className="text-sm text-on-surface-variant">
                    Confirm 200mm c/c spacing for vertical Y20 bars as per structural detail S-05.
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-4 group cursor-pointer">
                <input
                  defaultChecked
                  className="mt-1 w-6 h-6 rounded border-outline-variant text-primary focus:ring-secondary transition-all"
                  type="checkbox"
                />
                <div className="flex-1">
                  <span className="text-lg font-bold text-primary line-through opacity-50">
                    Lapping length check
                  </span>
                  <p className="text-sm text-on-surface-variant opacity-50">
                    Min 800mm overlap for tension bars at column bases.
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-4 group cursor-pointer">
                <input
                  className="mt-1 w-6 h-6 rounded border-outline-variant text-primary focus:ring-secondary transition-all"
                  type="checkbox"
                />
                <div className="flex-1">
                  <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    Cleanliness &amp; Cover
                  </span>
                  <p className="text-sm text-on-surface-variant">
                    Ensure no rust loose scale or mud. Verify 50mm clear cover spacers are installed.
                  </p>
                </div>
              </label>
            </div>
          </section>

          {/* Photo Upload Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-primary">
                Media Evidence
              </h2>
              <span className="text-xs font-bold text-on-surface-variant uppercase">
                3 / 6 Files Uploaded
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden group relative border border-surface-variant cursor-pointer">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Detailed close up of industrial steel rebar cage"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOPRtgmUMtcrHzLO36CF4Rt9H6j7L9hKkOYfOjZDk67-4N0F_-YKC9BS0yMPbM0pJ_9aI2V_bizaFrqCCbi5SsGMjwgTrOzcXM8w6QSWp32li2R2mKtmljJ2yL6Opq_KNOXAKV3uzMSrg1YFZwHalJ7Z2nNjPL3n2IANXhHSobPO2dL8T7acPSIELHTVwcMoBZIr9f_HQZfCjzY2SY8q9u81ezvhGwOPkCAN5bb9Ni6tM4lgC2tM-1WBifdToGpxWvFZxdT-hyzhE"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">
                    zoom_in
                  </span>
                </div>
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden group relative border border-surface-variant cursor-pointer">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Construction site scene with workers placing rebar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPelPK4b02kLzlaQGnV5B8JXUJFgH0UbvZQu2WNWW7VSYNM2oj1y21RJttIUh-KsmOPp0iViUMQu56kQNUcKzBwhQqX9U6tNoZto6lTML0JPHyw6c1jG5zAucSz7HLab0Zb7XVth0tMoEBx3bXzEn67WHfCKLTJJb_sOcWdJScKplK8Zo0gZpVJskzX148LNM7-jCOaEGMqX5JoUsIoSshcoAOeh_DsB2OkxzJaa_0VOUX35K6TbapHkRk1ZhGTQHBTWDdLtKPULA"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">
                    zoom_in
                  </span>
                </div>
              </div>
              <button className="aspect-square border-2 border-dashed border-outline-variant rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors group">
                <span className="material-symbols-outlined text-3xl text-outline group-hover:text-secondary transition-colors">
                  add_a_photo
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Upload Photo
                </span>
              </button>
            </div>
          </section>

          {/* Discussion/Comments */}
          <section className="bg-surface-container-low p-8 rounded-xl">
            <h2 className="text-xl font-black uppercase tracking-tight text-primary mb-6">
              Technical Notes
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  alt="Professional woman engineer wearing a hard hat"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5xRnoetmYcGzg8_ldy5gHwgBHyJqGf-smLSgwLe7Zze3M-_pNTYS9OsWHMo3IQTU8Oc3rvNgk7rMroihieE5glfEutDnMkkl0xrUZt4NeOCPuaB84pCMkO2nm8jff0lW15B2obyBbtfqtkp1RoNAB-O7-4dBbw2kEBGnjjfoWczogfB5BQSkbdwDv5wxy7kL0yvWVODvk92VgubAdouupFzE4o0zv-L4cDQfp6Tgzgm_ZfvOGrqtteV_1KMnIQJP4zY7Z_L6Tlw8"
                />
                <div className="flex-1 bg-surface-container-lowest p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-primary">
                      Sarah Jenkins (QS)
                    </span>
                    <span className="text-[10px] text-on-surface-variant">
                      10:45 AM
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Note: The stirrup hooks in Column C4 are 90 degrees, should be
                    135 degrees as per seismic requirements. Please verify.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative border border-outline-variant rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent">
              <textarea
                className="w-full bg-surface-container-lowest border-none p-4 text-sm focus:ring-0 min-h-[100px] outline-none"
                placeholder="Add a technical note or observation..."
              ></textarea>
              <button className="absolute bottom-3 right-3 bg-primary text-on-primary px-4 py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-all active:scale-95">
                Post Note
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Audit Trail & Actions */}
        <div className="lg:col-span-4 space-y-8">
          {/* Submission Panel */}
          <div className="bg-primary text-on-primary p-8 rounded-xl shadow-2xl">
            <h3 className="text-lg font-bold mb-6 tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">
                verified
              </span>{" "}
              Final Submission
            </h3>
            <p className="text-sm text-on-primary-container mb-8">
              Confirm that all inspection parameters have been met and photographic
              evidence is attached. This action is final and will notify the lead
              engineer.
            </p>
            <button className="w-full bg-secondary-container text-on-secondary-fixed py-4 rounded font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-secondary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
              Finalize &amp; Submit
            </button>
            <button className="w-full mt-4 border border-outline text-on-primary-container py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-all">
              Save Draft
            </button>
          </div>

          {/* Audit Trail */}
          <div className="bg-white border-l-2 border-surface-container-highest p-6 shadow-sm rounded-r-xl">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-outline mb-6">
              Audit Trail
            </h3>
            <div className="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-surface-container-highest">
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-[24px] h-[24px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full flex items-center justify-center z-10">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant block uppercase">
                  Today 09:12
                </span>
                <span className="text-sm font-bold text-primary block">
                  Marcus Thorne
                </span>
                <p className="text-[11px] text-on-surface-variant mt-0.5">
                  Marked 'Lapping length check' as complete.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-[24px] h-[24px] bg-surface-container-highest text-on-surface-variant rounded-full flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-[14px]">
                    add_photo_alternate
                  </span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant block uppercase">
                  Oct 23 15:30
                </span>
                <span className="text-sm font-bold text-primary block">
                  Marcus Thorne
                </span>
                <p className="text-[11px] text-on-surface-variant mt-0.5">
                  Uploaded 2 inspection photos.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-[24px] h-[24px] bg-surface-container-highest text-on-surface-variant rounded-full flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-[14px]">
                    edit
                  </span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant block uppercase">
                  Oct 23 11:00
                </span>
                <span className="text-sm font-bold text-primary block">
                  System
                </span>
                <p className="text-[11px] text-on-surface-variant mt-0.5">
                  Checklist item created by Project Lead.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
