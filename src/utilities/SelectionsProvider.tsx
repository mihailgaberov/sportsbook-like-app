import React, { useReducer } from "react";

export interface IAppContext {
  selectionId: string;
  removeSelection: (selectionId: string) => void;
  isSelected: (selectionId: string) => boolean;
}

const SelectionsContext = React.createContext<IAppContext | any>({});
const initialState = {
  selections: []
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "TOGGLE_SELECTIONS_STATE":
      if (state.selections.includes(action.payload)) {
        state.selections = state.selections.filter(
          (id: string) => id !== action.payload
        )
      } else {
        state.selections = [...state.selections, action.payload]
      }
      return {
        ...state,
        selections: state.selections
      };
    default:
      return initialState;
  }
};

function SelectionsContextProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <SelectionsContext.Provider value={value}>
      {props.children}
    </SelectionsContext.Provider>
  );
}

const SelectionsContextConsumer = SelectionsContext.Consumer;

export {
  SelectionsContext,
  SelectionsContextProvider,
  SelectionsContextConsumer
};
