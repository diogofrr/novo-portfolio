import { RefObject } from 'react'
import actions from './actions'
import { type initialState } from './data'

type ACTIONTYPE = {
      type: typeof actions.SAVE_REF
      payload: RefObject<HTMLElement>
    }
export const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): typeof initialState => {
  switch (action.type) {
    case actions.SAVE_REF:
      return { ...state, ref: action.payload }
    default:
      return state
  }
}
