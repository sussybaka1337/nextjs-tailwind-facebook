import Logo from "./Logo";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-40 w-full bg-white shadow-lg">
        <div className="flex justify-between p-4 mx-3">
          <div className="flex flex-row items-center gap-3">
            <Logo />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm trên Facebook" required />
          </div>
          <div className="hidden lg:flex items-center">
            <nav>
              <ul className="flex space-x-8">
                <li>Facebook</li>
                <li>Friends</li>
                <li>Videos</li>
                <li>Groups</li>
                <li>Games</li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center">
            <nav>
              <ul className="flex space-x-8">
                <li>Notifications</li>
                <li>Profile</li>
              </ul>
            </nav>
          </div>
          <button className="lg:hidden p-2 bg-gray-800 rounded text-white">
            Open
          </button>
        </div>
      </div>
    </>
  );
}