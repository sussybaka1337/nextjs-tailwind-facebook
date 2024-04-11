import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-full">
        <div className="my-5 mx-3">
          {children}
        </div>
      </div>
    </div>
  );
}