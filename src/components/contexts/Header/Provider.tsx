import { useReducer, createContext, RefObject } from 'react'
import { initialState } from './data'
import { reducer } from './reducer';
import actions from './Actions';

interface ContextData {
  state: typeof initialState;
  saveRef: (payload: RefObject<HTMLElement>) => void
}

interface ProviderProps {
  children: JSX.Element;
}

export const Context = createContext<ContextData | null>(null)

export default function Provider({
  children
}: ProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)

  const saveRef = (payload: RefObject<HTMLElement>) => {
    dispatch({ type: actions.SAVE_REF, payload })
  }

  return (
    <Context.Provider
      value={{
        state,
        saveRef
      }}
    >
      {children}
    </Context.Provider>
  )
}
