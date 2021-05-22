import create from "zustand";
import React from "react";

interface canvasState {
  reff: React.MutableRefObject<any>;
  setReff: (newReff: React.MutableRefObject<any>) => void;
}

export const useCanvasStore = create<canvasState>((set) => ({
  reff: null,
  setReff: (newReff) => set(() => ({ reff: newReff })),
}));
