import TopNav from "@/components/ui/TopNav";
import BottomNav from "@/components/ui/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <TopNav />
      {/* Blueprint subtle overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15" 
        style={{
          backgroundImage: "radial-gradient(circle, #c3c7ca 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      ></div>
      {children}
      <BottomNav />
    </div>
  );
}
