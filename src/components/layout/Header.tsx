import { useTranslation } from "react-i18next";
import { Toggle } from "../../theme/toggle";

const lngs: any = {
  en: {
    name: "En",
    nativeName: "English",
  },
  hn: {
    name: "Hn",
    nativeName: "Hindi",
  },
};

const Header = ({ username, logoutHandler, close }: any) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header bg-primary text-primary shadow py-4  top-0 sticky z-50  px-8 ">
      <div className="header-content flex items-center flex-row">
        <span className="text-lg font-medium ">{t("brandName")}</span>

        <div className="flex ml-auto">
          <div className="flex flex-end items-center">
            {Object.keys(lngs).map((lng: any) => (
              <button
                key={lng}
                className=" text-black text-sm bg-white px-1 mx-1 rounded"
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => {
                  i18n.changeLanguage(lng);
                }}
              >
                {lngs[lng].name}
              </button>
            ))}

            <div className="flex items-center h-full text-sm">
              <div className="flex items-center h-full">
                <div className="group relative h-full">
                  <div className="text-black flex items-center h-full  px-4 cursor-pointer">
                    <div
                      className="rounded-full h-6 w-6 border shadow-lg 
                  text-center
                  bg-orange-500
                  "
                    >
                      <span
                        aria-label={username}
                        className=" text-white capitalize text-md"
                      >
                        {username && username.charAt(0)}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-6 w-6 text-primary fill-current ml-1"
                    >
                      <path
                        className="heroicon-ui"
                        d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                      />
                    </svg>
                  </div>
                  <div className="hidden text-primary  shadow-lg group-hover:block absolute pin-r -ml-8 top-full w-48 bg-primary">
                    <ul className="list-reset">
                      <li>
                        <a
                          href="#"
                          className="px-4 flex  py-2 block text-primary  hover:bg-secondary  no-underline hover:no-underline"
                        >
                          {t("dark-mode")}
                          <span className="px-3">
                            <Toggle />{" "}
                          </span>
                        </a>
                      </li>
                      <li>
                        <hr className="border-t mx-2 border-gray-400" />
                      </li>
                      <li>
                        <button
                          onClick={logoutHandler}
                          className="px-4 py-2 w-full text-left  text-primary  hover:bg-secondary no-underline hover:no-underline"
                        >
                          {t("logout")}
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
};

const MobileHeader = ({ close }: any) => (
  <label
    htmlFor="menu-open"
    id="mobile-menu-button"
    className=" p-2 focus:outline-none bg-secondary   md:hidden cursor-pointer hover:text-white hover:bg-primary-800 rounded-md"
  >
    <svg
      id="menu-open-icon"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 transition duration-200 ease-in-out"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
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
