import React, { useReducer } from "react";

export interface IAppContext {
  selectionId: string;
  removeSelection: (selectionId: string) => void;
  isSelected: (selectionId: string) => boolean;
}

const SelectionsContext = React.createContext<IAppContext | any>({});
const initialState = {
  selectionId: ""
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "UNSELECT":
      return initialState;
    case "SELECT":
      return { ...state, selectionId: action.payload };
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
