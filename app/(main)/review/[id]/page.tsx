import Image from "next/image";
import Link from "next/link";

export default function ReviewApprovalPage() {
  return (
    <main className="pt-24 px-4 md:px-10 max-w-7xl mx-auto pb-32">
      {/* Breadcrumb & Header Asymmetry */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-on-surface-variant mb-2 font-label text-sm uppercase tracking-widest">
          <Link href="/projects" className="hover:underline">
            Project Alpha
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span>Structural Phase</span>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-primary font-bold">Review #8821</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary leading-none">
          Sub-Floor Concrete Reinforcement
        </h1>
        <p className="mt-4 text-on-surface-variant max-w-2xl font-body text-lg">
          Detailed inspection review for Section A-4. Submitted by Senior Site
          Lead: <span className="text-primary font-bold">Marcus Thorne</span>.
        </p>
      </header>

      {/* Status Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Task & Visual Evidence (Bento Grid Style) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Task Details Block */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_50px_rgba(14,29,37,0.08)]">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="w-2 h-8 bg-secondary rounded-full"></span>
                Submission Details
              </h2>
              <span className="px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant font-label text-xs font-bold uppercase tracking-tighter rounded">
                Submitted
              </span>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <p className="font-label text-xs uppercase text-on-surface-variant tracking-wider mb-1">
                    Checklist Category
                  </p>
                  <p className="font-headline font-bold text-primary">
                    SIPIL / Structural Steel
                  </p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <p className="font-label text-xs uppercase text-on-surface-variant tracking-wider mb-1">
                    Date Submitted
                  </p>
                  <p className="font-headline font-bold text-primary">
                    Oct 24, 2023 • 14:45 PM
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-surface-variant pl-6">
                <p className="font-label text-xs uppercase text-on-surface-variant tracking-wider mb-2">
                  Worker Observation &amp; Comments
                </p>
                <p className="font-body text-on-surface leading-relaxed italic">
                  "All rebar spacers placed according to Blueprint A-02. Tension
                  cables verified for pre-stressing. Slight moisture present on
                  southern quadrant but within tolerance levels for the pour. Ready
                  for structural sign-off."
                </p>
              </div>
            </div>
          </section>

          {/* Photographic Evidence Grid */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined">photo_library</span>
              Visual Evidence (4 Photos)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-high cursor-pointer">
                <img
                  alt="Steel rebar"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJtxep44va2-HpQ3Amjnq1hvWwN-hTS7GVmYk_WylZpN7kCzPiQLnCtbIkzSVzqUTAvb2ejPoFVk-ShN2vLHdX7wBlp50qOblwa12PxvNu2-myH6XWnZKI7uVW1RuCb5INUCluOQ68w9kgf8MCPopYZ2PmBj9XDZzLHMdmFYS018mHtHJwmo0guAqLJQu-JNGNmhWuxs-LSUALwjO9bOsVjkSYWcvdgIJeJ1ZsGd3g7WeLdKdzixzFfedM3tUYrrhHIUasVjIedmE"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">
                    zoom_in
                  </span>
                </div>
              </div>
              <div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-high cursor-pointer">
                <img
                  alt="Concrete base"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmzfizkwgTTXEb2zrllKBLjpXN1zYszSJAgoTLccU0MEdN2zB__7vgMC-QZb7Sq7lZxVspKS8hPypvVv-tsxxuI8ARpvXdOt-T2BthbBGhHlafmaxbMZ0PGyE6CHdlOUGVwU9wDy9S4nMepcZM4Vn2PEKmxO95zp-AvQP1vymcgEekq9t8WVIxrgyKQzlXx-LaKobBqiXNpKEmZvWSa2-iIZmPBHpx_ycC0mIw-u2yIYsLDpms2EnMFOUK4_mHJHu_dB2zd9zsWs0"
                />
              </div>
              <div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-high cursor-pointer">
                <img
                  alt="Site Tools"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCreB4E6D0Yiq_gu5pBlkI_Kkw03ZVYaDUSyXI1sUTjepKQzYuAkKImNb30NBcmC3_9IM2TPfLyIdyRgVpwbGyoRcT9Jj8ulWL2AWcHn3Ren4dlxF0v8UHj704CRwKWfiCm7tHfNaS5ftUKJL60SNk6tc6I0EFhHByb-_tnfYEoI_QT4E_koSC81ouawzFTBMIwLLQCYDb847rLrAwbK1fKlgRzWWTzyzfbf99KlKxV-Kak5Fo5Nl0y_7U1npmAIfjjAjAYkwUSIcM"
                />
              </div>
              <div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-high cursor-pointer">
                <img
                  alt="Worker verify"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcmppsY6zPM9zy6B2QtiOFbq-nlyac9bDGDl2HkJv3Se4fnYUPK48CcNAn2ssYLAcXX7SYjThd4jRlYE7VrHj07Iz6X-VebcqZBNmaWzs94eb6hO_fE4g9u6GyalCTN0lHcExiRB9n2HXmmuYChRb-a1ZEHxvkSGbvQrbKJwEoyOx_2ur9Eqan8-kdHVbriY1qNpVxt5gB1gb_QwcGFFrNy7k1T7ms5TW7ihA-ZcoeCo7rWUGB70PC7r50COgACK4HJBi4j9awzUE"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right: Decision Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24">
            <div className="bg-primary text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
              {/* Decorative Industrial Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/30 to-transparent -mr-16 -mt-16 rounded-full blur-3xl"></div>
              <h2 className="text-2xl font-black mb-6 relative z-10">
                Manager Decision
              </h2>
              <div className="space-y-4 relative z-10">
                {/* Approve Action */}
                <button className="w-full flex items-center justify-between bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 py-5 rounded-lg font-headline font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                  <span>Approve Pour</span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </button>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs font-label uppercase tracking-widest mb-4">
                    Request Adjustments
                  </p>
                  <label className="block mb-2 text-sm font-medium text-white/80">
                    Rejection Reason (Mandatory)
                  </label>
                  <textarea
                    className="w-full bg-primary-container text-white border-0 focus:ring-2 focus:ring-secondary rounded-lg p-4 text-sm font-body placeholder:text-on-primary-container min-h-[100px] outline-none"
                    placeholder="Detail the specific corrections required..."
                    rows={4}
                  ></textarea>
                  <button className="w-full mt-4 flex items-center justify-between bg-error-container text-on-error-container px-6 py-4 rounded-lg font-headline font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    <span>Reject / Revision</span>
                    <span className="material-symbols-outlined">warning</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Task Compliance Summary */}
            <div className="mt-8 bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
              <h4 className="font-headline font-bold text-primary mb-4">
                Compliance Status
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check
                  </span>
                  <span className="text-on-surface-variant">
                    Rebar Type: Grade 60 (Verified)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check
                  </span>
                  <span className="text-on-surface-variant">
                    Grid Spacing: 150mm OC (Verified)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-amber-500 text-sm">
                    info
                  </span>
                  <span className="text-on-surface-variant">
                    Southern Quad: High Moisture (Low Risk)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
