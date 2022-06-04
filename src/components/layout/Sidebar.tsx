import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ChartIcon, HomeIcon, MapIcon } from "../../assets/Icon";

const navLinks = [
  {
    to: "/home",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    to: "/map",
    label: "Map",
    icon: <MapIcon />,
  },
  {
    to: "/report",
    label: "Report",
    icon: <ChartIcon />,
  },
];

interface NavLinkProps {
  to: string;
  label: string;
  icon: JSX.Element;
  close: () => void;
}

const Sidebar = ({ close }: any | undefined) => {
  const { t } = useTranslation();
  return (
    <aside
      id="sidebar"
      className="
     md:w-16 md:hover:w-44
     w-56
       
     top-0 
     z-50
     h-screen
     sticky
     transition-all	
     transition-slowest bg-primary transform -translate-x-full 
     md:translate-x-0  
     duration-150 ease-in
   "
    >
      <div className="flex flex-col space-y-6 ">
        <NavLink
          to="/"
          className="text-primary flex  space-x-2 px-4 text-center justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mt-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
              clipRule="evenodd"
            />
          </svg>
        
        </NavLink>

        <nav>
          <ul className="flex flex-col w-full ">
            {navLinks.map((navLink) => (
              <AppNavLink
                close={close}
                to={navLink.to}
                label={t(navLink.label)}
                icon={navLink.icon}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const AppNavLink = (props: NavLinkProps) => (
  <NavLink
    to={props.to}
    onClick={props.close}
    className={({ isActive }) =>
      isActive
        ? "flex ripple-bg-black  bg-secondary hover:bg-secondary   my-1 mx-2 flex-row items-center h-10 px-3 rounded-lg text-white font-medium"
        : "flex   ripple-bg-black     bg-primary hover:bg-secondary   transition-transform hover:scale-105 my-1 mx-2 flex-row items-center h-10 px-3 rounded-lg text-white font-medium"
    }
  >
    {props.icon && (
      <span className="flex items-center justify-center   text-gray-400">
        {props.icon}
      </span>
    )}

    <span className="ml-3 overflow-hidden fade-in text-sm">{props.label}</span>
  </NavLink>
);

export default Sidebar;
