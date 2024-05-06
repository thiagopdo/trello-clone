import { Action } from "./action";
import { nanoid } from "nanoid";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type Appstate = {
  lists: List[];
};

export function appStateRecuer(
  draft: Appstate,
  action: Action
): Appstate | void {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break
    }
  }
}
