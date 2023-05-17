import Navbar from "src/sections/shared/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">{children}</div>
    </>
  );
}
