import { RefObject } from "react";

export interface InitialState {
  ref: RefObject<HTMLElement> | null
}

export const initialState: InitialState = {
  ref: null
}
