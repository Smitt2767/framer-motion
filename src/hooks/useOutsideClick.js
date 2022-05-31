import { useEffect } from "react";

const useOutsideClick = (ref, onOutsideClick) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.contains(ref.current)) {
        onOutsideClick();
      }
    };

    window.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [onOutsideClick, ref]);
};

export default useOutsideClick;
