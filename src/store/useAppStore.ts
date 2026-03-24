import { create } from "zustand";
import { createLanguageSlice, type LanguageSliceType } from "./languageSlice";

export const useAppStore = create<LanguageSliceType>()((...a) => ({
  ...createLanguageSlice(...a),
}));
