import { useDispatch, useSelector, useStore, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import type { Store } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState>  = useSelector;
export const useAppStore = () => useStore<Store<RootState>>(); // Typed store — use sparingly, prefer hooks 