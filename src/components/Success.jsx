import React, { useEffect, useRef } from "react";
import Modal from "./Modal";

export default function Success({ toggleSuccess }) {
  const successDialogRef = useRef(null);

  function toggleDialog() {
    const curr = successDialogRef.current;

    if (!curr) return;

    if (curr.hasAttribute("open")) {
      curr.close();
      toggleSuccess();
    } else {
      curr.showModal();
    }
  }
  useEffect(() => {
    toggleDialog();
  }, []);

  return (
    <Modal ref={successDialogRef} toggleDialog={toggleDialog}>
      <div className="flex flex-col gap-5 p-6">
        <h2 className="font-bold text-2xl">Success</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <button
          onClick={toggleDialog}
          id="checkout"
          className="py-1.5 px-2.5 self-end"
        >
          Okay
        </button>
      </div>
    </Modal>
  );
}
