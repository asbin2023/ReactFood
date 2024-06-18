import React, { forwardRef } from "react";

const Modal = forwardRef(({ toggleDialog, children }, ref) => {
  function handleClick(e) {
    if (e.currentTarget === e.target) {
      toggleDialog();
    }
  }

  return (
    <dialog
      className="rounded-lg w-5/6 max-w-[550px] "
      ref={ref}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </dialog>
  );
});

export default Modal;
