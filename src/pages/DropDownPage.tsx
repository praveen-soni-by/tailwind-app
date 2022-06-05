import React from "react";
import Dropdown from "../components/Dropdown";

const DropDownItems = [
  {
    name: "account",
    link: "/dropdown",
  },
  {
    name: "overview",
    link: "/dropdown",
  },
  {
    name: "logout",
    link: "/dropdown",
  },
];

export default function DropDownPage() {
  return (
    <section
      className="antialiased flex justify-center   text-gray-600 h-screen  px-4"
     
    >
      <Dropdown header="Profile" items={DropDownItems} />
    </section>
  );
}
