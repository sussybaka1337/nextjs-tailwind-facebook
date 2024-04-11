import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-full">
        <div className="my-5 mx-3">
          {children}
          <button class="rounded-full m-5 fixed bottom-0 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-5 rounded">Post</button>
        </div>
      </div>
    </div>
  );
}