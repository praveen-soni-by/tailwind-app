import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";



interface NavLinkProps {
    to: string;
    label: string;
    icon?: JSX.Element;
    close?: () => void;
}

export const AppNavLink = (props: NavLinkProps) => {
    const { t } = useTranslation();


    return (
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

            <span className="ml-3 overflow-hidden fade-in text-sm">{t(props.label)}</span>
        </NavLink>
    );
}