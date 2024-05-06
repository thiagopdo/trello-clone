/**
 * interface AddListAction {
2 type: "ADD_LIST"
3 payload: string
4 }
5 6
interface AddTaskAction {
7 type: "ADD_TASK"
8 payload: { text: string; listId: string }
9 }
1
 */

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } };

export function addTask(text: string, listId: string): Action {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      listId,
    },
  };
}

export function addList(text: string): Action {
  return {
    type: "ADD_LIST",
    payload: text,
  };
}
