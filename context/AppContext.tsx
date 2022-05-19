import { createContext, useState, useEffect } from "react";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppContext = createContext({});

const AppWrapper: React.FC<AppWrapperProps> = ({
  children,
}: AppWrapperProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  return <AppContext.Provider value={scrollY}>{children}</AppContext.Provider>;
};

export { AppContext, AppWrapper };
