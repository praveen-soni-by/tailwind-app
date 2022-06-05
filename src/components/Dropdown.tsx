import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface DropdownType {
  header: string;
  items: ItemsLink[];
}

interface ItemsLink {
  name: string;
  link: string;
  closeAction?: () => void;
}

export default function Dropdown(props: DropdownType) {
  const [isActive, setActive] = useState<Boolean>();
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setActive(!isActive)}
          type="button"
          className="inline-flex justify-center w-full
        text-black
         px-4 py-2 text-sm font-medium  
         "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {props?.header}

          {isActive && (
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polyline points="18 15 12 9 6 15" />
            </svg>
          )}

          {!isActive && (
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>

      {isActive && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1 " role="none">
            {props?.items.map((item: ItemsLink) => {
              return (
                <Link
                  closeAction={() => setActive(!isActive)}
                  link={item?.link}
                  name={item?.name}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export const Link = (props: ItemsLink) => {
  const { t } = useTranslation();

  return (
    <NavLink
      onClick={props.closeAction}
      to={props?.link}
      className={
        "flex   ripple-bg-gray-100   bg-white text-black my-1 mx-2 flex-row items-center h-10 px-3 rounded-lg  font-medium"
      }
    >
      <span className="ml-3 overflow-hidden fade-in text-sm">
        {t(props?.name)}
      </span>
    </NavLink>
  );
};
