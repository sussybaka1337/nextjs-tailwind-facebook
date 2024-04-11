export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 max-md:grid-cols-1">
      <div className="col-span-3 flex flex-col p-5 rounded gap-3 max-lg:hidden">
        {[...Array(10)].map(index => {
          return (
            <div key={crypto.randomUUID()} className="flex items-center gap-3">
              <img className="rounded-full" src="SmallAvatar.jpg" width={"36px"} height={"36px"} />
              <a>Võ Ngọc Bảo</a>
            </div>
          );
        })}
      </div>
      <div className="col-span-6 flex flex-col p-5 max-lg:col-span-12 gap-5">
        {[...Array(10)].map(index => {
          return (
            <div key={crypto.randomUUID()} className="flex flex-col w-full border-solid border-2 shadow-lg rounded-lg">
              <div className="m-3">
                <div className="mb-3">
                  <div className="flex items-center gap-3">
                    <img className="rounded-full" src="SmallAvatar.jpg" width={"32px"} height={"32px"} />
                    <strong>Võ Ngọc Bảo</strong>
                  </div>
                </div>
                <div className="mx-3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet diam tempor, blandit sem vel, pharetra urna. Etiam sagittis urna non porta dictum. Vivamus eu arcu suscipit, sodales risus non, pellentesque lacus. Nam eget massa nunc. Curabitur vitae vehicula purus. Quisque vel venenatis augue. Nullam vulputate tellus a odio ultrices, nec feugiat ipsum sagittis. Integer consectetur elementum leo id laoreet. In id tempor purus, eget pellentesque mauris. Nam fringilla massa id urna faucibus, in commodo turpis suscipit. Nulla efficitur diam felis, eu porttitor sem semper et. Mauris et augue auctor, dictum ligula ac, placerat sapien.</p>
                  <p>Morbi sagittis pharetra diam. Donec vulputate augue sit amet magna vestibulum, id maximus felis vulputate. Fusce porta ex vel felis vestibulum volutpat sed non elit. Maecenas fringilla quam et elit mattis, sit amet vulputate lectus sollicitudin. Donec pharetra metus nunc, quis pellentesque neque condimentum ac. Pellentesque et dui convallis elit tincidunt porta sed et purus. Donec tortor arcu, congue a volutpat non, eleifend sit amet dui. Suspendisse sed nisl ut sem sodales sollicitudin non ut massa. Nulla feugiat pretium neque, in rutrum mi blandit in.</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col p-2 gap-3 w-full justify-center">
                <div className="flex justify-between gap-5">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                    Like
                  </button>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                    Comment
                  </button>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                    Share
                  </button>
                </div>
                <hr />
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bình luận" required />
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-span-3 flex flex-col p-5 rounded gap-3 max-lg:hidden">
        {[...Array(10)].map(index => {
          return (
            <div key={crypto.randomUUID()} className="flex items-center gap-3">
              <img className="rounded-full" src="SmallAvatar.jpg" width={"36px"} height={"36px"} />
              <a>Võ Ngọc Bảo</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
