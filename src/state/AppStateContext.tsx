import { FC, createContext, useContext, ReactNode, Dispatch } from "react";
import { appStateReducer, Appstate, List, Task } from "./appStateReducer";
import { Action } from "./action";
import { useImmerReducer } from "use-immer";

const appData: Appstate = {
  lists: [
    {
      id: "0",
      text: "To do",
      tasks: [{ id: "c0", text: "Generate App scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export function useAppState() {
  return useContext(AppStateContext);
}
