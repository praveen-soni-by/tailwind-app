import React from "react";
import ReactDom from "react-dom";
import "./model.css";

var ref: any = document.getElementById("portal");

interface ModelProps{
  open: boolean;
  onClose: ()=>void;
  children:React.ReactNode
}

export default function Model({ open, children,onClose }: ModelProps) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 z-[1000] animated fadeIn faster"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 z-100 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        {children}
      </div>
    </>,
    ref
  );
}
