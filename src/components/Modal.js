import React from "react";
import ReactDom from "react-dom";

function Modal({ children, open, close }) {
  if (!open) return null;
  const onClose = () => {
    close();
    document.body.style.overflow = "auto";
  };

  if (open) {
    document.body.style.overflow = "hidden";
  }
  const handleLClickayout = (e) => {
    if (e.target.classList.contains("layout")) {
      onclose();
    }
  };

  return ReactDom.createPortal(
    <div onClick={handleLClickayout}>
      <Layout />
      <div className="absolute top-1/2 left-1/2 z-50 p-5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md ">
        <div className="text-right">
          <button
            className="font-bold text-3xl hover:text-gray-400 "
            onClick={onClose}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

const Layout = () => {
  return (
    <div className="absolute inset-0 bg-black opacity-50  z-50 layout "></div>
  );
};

export default Modal;
