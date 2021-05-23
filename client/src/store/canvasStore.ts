import create from "zustand";
import React from "react";

interface canvasState {
  reff: React.MutableRefObject<any>;
  setReff: (newReff: React.MutableRefObject<any>) => void;
  color: string;
  width: number;
  setColor: (newColor: string) => void;
  setWidth: (newWidth: number) => void;
}

export const useCanvasStore = create<canvasState>((set) => ({
  reff: null,
  color: "black",
  width: 5,
  setReff: (newReff) => set(() => ({ reff: newReff })),
  setColor: (newColor) => set(() => ({ color: newColor })),
  setWidth: (newWidth) => set(() => ({ width: newWidth })),
}));
