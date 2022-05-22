import { useState, useEffect } from "react";

const useScrollY = (speed?: number) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  return speed ? speed * scrollY : 1;
};

export default useScrollY;

/* ----------------------------------------------- //
  import
    import useScrollY from "hooks/useScrollY";

  set (speed: number)     
    const ScrollY = useScrollY(speed);

  use
    ScrollY: number
//----------------------------------------------- */
