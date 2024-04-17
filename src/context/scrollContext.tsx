import { FC, createContext, useState } from "react";
import { InViews } from "./type";

export const scrollContext = createContext({});

interface Props {
  children: JSX.Element;
}

const ScrollContextProvider: FC<Props> = ({ children }) => {
  const [sectionChange, SetsectionChange] = useState<InViews>({
    about: false,
    problem: false,
    team: false,
    deepMind: false,
    outCome: false,
  });

  return (
    <scrollContext.Provider value={{ sectionChange, SetsectionChange }}>
      {children}
    </scrollContext.Provider>
  );
};

export default ScrollContextProvider;
