import { useEffect } from 'react';

const useClickAway = (ref, callback) => {
  const keys = {
    tab: 9,
    escape: 27
  };

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  const handleKeys = (e) => {
    if (ref.current) {
      // Close Modal on escape key press.
      if (e.keyCode === keys.escape) {
        callback(e);
      } else { // Trap focus in modal until modal is not closed.
        const focusableElmnts = ref.current.querySelectorAll('button:not([disabled]), img:not([disabled])');
        const firstFocusableElmnt = focusableElmnts[0];
        const lastFocusableElmnt = focusableElmnts[focusableElmnts.length - 1];
        if (e.keyCode === keys.tab || (e.shiftKey && e.keyCode === keys.tab)) {
          if (document.activeElement === firstFocusableElmnt) {
            lastFocusableElmnt.focus();
            e.preventDefault();
          } else {
            firstFocusableElmnt.focus();
            e.preventDefault();
          }
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeys);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeys);
      document.removeEventListener('touchstart', handleClick);
    };
  });
};

export default useClickAway;
