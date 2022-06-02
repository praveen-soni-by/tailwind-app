const Header = ({ username, logoutHandler, close }: any) => (
  <header className="header bg-white shadow py-4  top-0 sticky z-50  px-8 ">
    <div className="header-content flex items-center flex-row">
      <span
        className="text-lg font-medium "
      >
        BRAND NAME
      </span>

      <div className="flex ml-auto">
        <div className="flex flex-end items-center">
          <div className="flex items-center h-full text-sm">
            <div className="flex items-center h-full">
              <div
                className="rounded-full h-6 w-6 border shadow-lg 
            text-center
            bg-orange-500
            
            "
              >
                <span className="text-white capitalize text-md">
                  {username && username.charAt(0)}
                </span>
              </div>

          

              <div className="group relative h-full">
                <div className="text-black flex items-center h-full bg-grey-darkest px-4 cursor-pointer">
                  <span className="capitalize">{username}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-6 w-6 text-grey-darker fill-current ml-1"
                  >
                    <path
                      className="heroicon-ui"
                      d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                    />
                  </svg>
                </div>
                <div className="hidden shadow-lg group-hover:block absolute pin-r -ml-8 top-full w-48 bg-white">
                  <ul className="list-reset">
                    <li>
                      <a
                        href="#"
                        className="px-4 py-2 block text-gray-900 hover:bg-gray-200  no-underline hover:no-underline"
                      >
                        My account
                      </a>
                    </li>
                    <li>
                      <hr className="border-t mx-2 border-gray-400" />
                    </li>
                    <li>
                      <button
                        onClick={logoutHandler}
                        className="px-4 py-2 w-full text-left  text-gray-900 hover:bg-gray-200 no-underline hover:no-underline"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <MobileHeader close={close} />
        </div>
      </div>
    </div>
  </header>
);

const MobileHeader = ({ close }: any) => (
  <label
    htmlFor="menu-open"
    id="mobile-menu-button"
    className=" p-2 focus:outline-none   md:hidden cursor-pointer hover:text-white hover:bg-primary-800 rounded-md"
  >
    <svg        id="menu-open-icon"
xmlns="http://www.w3.org/2000/svg"       className="h-6 w-6 transition duration-200 ease-in-out"
fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
      
    <a href="#" onClick={close}>
      <svg
        id="menu-close-icon"
        className="h-6 w-6 transition duration-200 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </a>
  </label>
);

export default Header;
