import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./layout.css";
import { Suspense } from "react";

export default function Layout({ children }: any) {
  let navigate = useNavigate();

  const logoutHandler = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login")
  }

  const close = () => {
    let doc: any = document.getElementById("menu-open");
    if (doc.checked) {
      doc.checked = false;
    }
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="flex flex-row min-h-screen  bg-gray-100 text-gray-800 z-50 over">
        <input type="checkbox" id="menu-open" className="hidden" />
        <Sidebar close={close} />
        <main
          className="main flex flex-col flex-grow -ml-56 md:ml-0 transition-all duration-150 ease-in">
          <Header close={close} username="User" logoutHandler={logoutHandler} />
          <div className="main-content flex flex-col flex-grow p-2">
            {children}
          </div>
        </main>
      </div>
    </Suspense>
  );
}

