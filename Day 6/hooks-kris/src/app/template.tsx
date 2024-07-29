import Navbar from "@/components/navbar.component";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
