import { useCallback, useEffect, useRef } from "react";

export default (
  onClose,
  modalRef // doar modals don't bubble click events to the document
) => {
  const ref = useRef(null);
  const escapeListener = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );
  const clickListener = useCallback(
    (e) => {
      if (!ref.current?.contains(e.target)) {
        onClose?.();
      }
    },
    [onClose]
  );
  useEffect(() => {
    const elem = modalRef?.current;
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    elem?.addEventListener("click", clickListener);
    elem?.addEventListener("keyup", escapeListener);

    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
      elem?.removeEventListener("click", clickListener);
      elem?.removeEventListener("keyup", escapeListener);
    };
  }, [escapeListener, clickListener, modalRef]);
  return ref;
};
