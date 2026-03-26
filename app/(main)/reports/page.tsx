'use client';
import Image from "next/image";
import Link from "next/link";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

export default function ReportsPage() {
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Project Analytics & Exports", 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [['Reference ID', 'Inspection Item', 'Category', 'Inspector', 'Status', 'Date']],
      body: [
        ['#BP-2023-901', 'Foundation Pour Compliance', 'Sipil', 'David Chen', 'Approved', 'Oct 24, 2023'],
        ['#BP-2023-904', 'Electrical Conduit Routing', 'MEP', 'Sarah Miller', 'Needs Revision', 'Oct 23, 2023'],
        ['#BP-2023-908', 'Drywall Moisture Test', 'Arsitektur', 'James Wilson', 'Submitted', 'Oct 22, 2023'],
        ['#BP-2023-911', 'Fire Alarm Wiring', 'MEP', 'Sarah Miller', 'Approved', 'Oct 22, 2023'],
      ],
    });
    doc.save("BuildTrack_Report.pdf");
  };

  const handleExportExcel = () => {
    const data = [
      { 'Reference ID': '#BP-2023-901', 'Inspection Item': 'Foundation Pour Compliance', 'Category': 'Sipil', 'Inspector': 'David Chen', 'Status': 'Approved', 'Date': 'Oct 24, 2023' },
      { 'Reference ID': '#BP-2023-904', 'Inspection Item': 'Electrical Conduit Routing', 'Category': 'MEP', 'Inspector': 'Sarah Miller', 'Status': 'Needs Revision', 'Date': 'Oct 23, 2023' },
      { 'Reference ID': '#BP-2023-908', 'Inspection Item': 'Drywall Moisture Test', 'Category': 'Arsitektur', 'Inspector': 'James Wilson', 'Status': 'Submitted', 'Date': 'Oct 22, 2023' },
      { 'Reference ID': '#BP-2023-911', 'Inspection Item': 'Fire Alarm Wiring', 'Category': 'MEP', 'Inspector': 'Sarah Miller', 'Status': 'Approved', 'Date': 'Oct 22, 2023' },
    ];
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Analytics");
    XLSX.writeFile(wb, "BuildTrack_Analytics.xlsx");
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 space-y-12 pt-24 pb-32">
      {/* Header & Export Actions */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/15 pb-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            Project Analytics &amp; Exports
          </h1>
          <p className="text-on-surface-variant font-medium">
            Metric performance and compliance record for{" "}
            <span className="text-secondary font-bold">Harborview Plaza Phase II</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={handleExportPDF} className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/10">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              picture_as_pdf
            </span>
            Export to PDF
          </button>
          <button onClick={handleExportExcel} className="flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-secondary/10">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              table_chart
            </span>
            Export to Excel
          </button>
        </div>
      </header>

      {/* Summary Visualization Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary Stats Card */}
        <div className="lg:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  analytics
                </span>
                Task Completion Status
              </h3>
              <p className="text-sm text-on-surface-variant">
                Weekly distribution across all modules
              </p>
            </div>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded text-xs font-bold">
              LIVE UPDATES
            </span>
          </div>

          {/* Bar Chart Representation */}
          <div className="flex items-end justify-between h-48 gap-4 px-2">
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div
                className="w-full bg-primary-container rounded-t-lg transition-all group-hover:bg-primary"
                style={{ height: "65%" }}
              ></div>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Sipil
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div
                className="w-full bg-primary-container rounded-t-lg transition-all group-hover:bg-primary"
                style={{ height: "40%" }}
              ></div>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Arch
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div
                className="w-full bg-secondary-container rounded-t-lg transition-all group-hover:opacity-80"
                style={{ height: "85%" }}
              ></div>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                MEP
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div
                className="w-full bg-primary-container rounded-t-lg transition-all group-hover:bg-primary"
                style={{ height: "30%" }}
              ></div>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Safety
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div
                className="w-full bg-primary-container rounded-t-lg transition-all group-hover:bg-primary"
                style={{ height: "55%" }}
              ></div>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                HVAC
              </span>
            </div>
          </div>
        </div>

        {/* Distribution Ring */}
        <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-primary-container"
                cx="64"
                cy="64"
                fill="transparent"
                r="58"
                stroke="currentColor"
                strokeWidth="8"
              ></circle>
              <circle
                className="text-secondary"
                cx="64"
                cy="64"
                fill="transparent"
                r="58"
                stroke="currentColor"
                strokeDasharray="364"
                strokeDashoffset="91"
                strokeWidth="8"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">75%</span>
              <span className="text-[10px] uppercase font-bold opacity-60">
                Complete
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold">Quarterly Target</h3>
          <p className="text-sm text-on-primary-container max-w-[200px]">
            You are ahead of schedule by 4.2 days compared to the previous sprint.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6">
        <div className="flex items-center gap-2 border-l-4 border-secondary pl-4">
          <h2 className="text-xl font-bold text-primary uppercase tracking-tight">
            Active Filters
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Date Range
            </label>
            <div className="flex items-center gap-2 bg-surface p-3 rounded-lg border border-outline-variant/15 focus-within:ring-2 ring-secondary ring-offset-2 transition-all">
              <span className="material-symbols-outlined text-outline text-sm">
                calendar_today
              </span>
              <input
                className="bg-transparent border-none text-sm font-medium focus:ring-0 w-full outline-none"
                type="text"
                defaultValue="Oct 01 - Oct 31, 2023"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Category
            </label>
            <div className="flex items-center gap-2 bg-surface p-3 rounded-lg border border-outline-variant/15">
              <span className="material-symbols-outlined text-outline text-sm">
                category
              </span>
              <select className="bg-transparent border-none text-sm font-medium focus:ring-0 w-full appearance-none outline-none">
                <option>All Categories</option>
                <option>Sipil</option>
                <option>Arsitektur</option>
                <option>MEP</option>
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">
              Assigned User
            </label>
            <div className="flex items-center gap-2 bg-surface p-3 rounded-lg border border-outline-variant/15">
              <span className="material-symbols-outlined text-outline text-sm">
                person
              </span>
              <select className="bg-transparent border-none text-sm font-medium focus:ring-0 w-full appearance-none outline-none">
                <option>All Users</option>
                <option>David Chen</option>
                <option>Sarah Miller</option>
                <option>James Wilson</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all">
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Table View */}
      <section className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg shadow-slate-200/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-on-primary">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                  Reference ID
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                  Inspection Item
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                  Category
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                  Inspector
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                  Date
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-right whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5 font-mono text-sm text-on-surface-variant whitespace-nowrap">
                  #BP-2023-901
                </td>
                <td className="px-6 py-5 min-w-[200px]">
                  <span className="font-bold text-primary block">
                    Foundation Pour Compliance
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    Section A-12 / Level B2
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        foundation
                      </span>
                    </div>
                    <span className="text-sm font-medium">Sipil</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm whitespace-nowrap">David Chen</td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                  Oct 24, 2023
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    more_vert
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5 font-mono text-sm text-on-surface-variant whitespace-nowrap">
                  #BP-2023-904
                </td>
                <td className="px-6 py-5 min-w-[200px]">
                  <span className="font-bold text-primary block">
                    Electrical Conduit Routing
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    North Wing / Floor 4
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        bolt
                      </span>
                    </div>
                    <span className="text-sm font-medium">MEP</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm whitespace-nowrap">Sarah Miller</td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="bg-error-container text-on-error-container px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter">
                    Needs Revision
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                  Oct 23, 2023
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    more_vert
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5 font-mono text-sm text-on-surface-variant whitespace-nowrap">
                  #BP-2023-908
                </td>
                <td className="px-6 py-5 min-w-[200px]">
                  <span className="font-bold text-primary block">
                    Drywall Moisture Test
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    Residential Unit 402
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        home_work
                      </span>
                    </div>
                    <span className="text-sm font-medium">Arsitektur</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm whitespace-nowrap">James Wilson</td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter">
                    Submitted
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                  Oct 22, 2023
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    more_vert
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5 font-mono text-sm text-on-surface-variant whitespace-nowrap">
                  #BP-2023-911
                </td>
                <td className="px-6 py-5 min-w-[200px]">
                  <span className="font-bold text-primary block">
                    Fire Alarm Wiring
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    Main Lobby / Entrance
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        emergency_share
                      </span>
                    </div>
                    <span className="text-sm font-medium">MEP</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm whitespace-nowrap">Sarah Miller</td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant whitespace-nowrap">
                  Oct 22, 2023
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    more_vert
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-surface-container-low flex flex-col md:flex-row gap-4 items-center justify-between border-t border-outline-variant/15">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Showing 4 of 128 records
          </span>
          <div className="flex gap-2">
            <button className="p-2 bg-surface text-primary rounded border border-outline-variant/20 hover:bg-white transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="px-4 py-2 bg-primary text-on-primary rounded font-bold text-xs">
              1
            </button>
            <button className="px-4 py-2 bg-surface text-primary rounded font-bold text-xs hover:bg-white transition-all">
              2
            </button>
            <button className="px-4 py-2 bg-surface text-primary rounded font-bold text-xs hover:bg-white transition-all">
              3
            </button>
            <button className="p-2 bg-surface text-primary rounded border border-outline-variant/20 hover:bg-white transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
