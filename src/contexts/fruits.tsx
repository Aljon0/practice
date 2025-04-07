/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
export type FruitsContextType = {
  fruits: string[];
  addFruit: (fruit: string) => void;
  removeFruit: (fruit: string) => void;
  updateFruit: (fruit: string) => void;
  getFruit: (fruit: string) => string | undefined;
};

export const FruitsContext = createContext<FruitsContextType>({
  fruits: [],
  addFruit: (fruit: string) => {},
  removeFruit: (fruit: string) => {},
  updateFruit: (fruit: string) => {},
  getFruit: (fruit: string) => undefined,
});

export type FruitsContextProviderProps = {
  children: React.ReactNode;
};

export function FruitsContextProvider({
  children,
}: FruitsContextProviderProps) {
  const [fruits, setFruits] = useState<string[]>([]);
  const addFruit = (fruit: string) => {
    setFruits([...fruits, fruit]);
  };
  const removeFruit = (fruit: string) => {
    setFruits(fruits.filter((f) => f !== fruit));
  };

  const updateFruit = (fruit: string) => {
    setFruits(fruits.map((f) => (f === fruit ? fruit : f)));
  };

  const getFruit = (fruit: string) => {
    return fruits.find((f) => f === fruit);
  };

  const ContextValue: FruitsContextType = {
    fruits,
    addFruit,
    removeFruit,
    updateFruit,
    getFruit,
  };

  return (
    <FruitsContext.Provider
      value={{ fruits, addFruit, removeFruit, updateFruit, getFruit }}
    >
      {children}
    </FruitsContext.Provider>
  );
}

export function useFruitsContext() {
  return useContext(FruitsContext);
}
