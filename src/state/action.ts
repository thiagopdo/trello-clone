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

import { DragItem } from "../DragItem";

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "MOVE_LIST"; payload: { draggedId: string; hoverId: string } }
  | {
      type: "MOVE_TASK";
      payload: {
        draggedItemId: string;
        hoveredItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      };
    }
  | { type: "SET_DRAGGED_ITEM"; payload: DragItem | null };

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

export function moveList(draggedId: string, hoverId: string): Action {
  return {
    type: "MOVE_LIST",
    payload: {
      draggedId,
      hoverId,
    },
  };
}

export function setDraggedItem(draggedItem: DragItem | null): Action {
  return {
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem,
  };
}

export function moveTask (
  draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action {
  return {
    type: "MOVE_TASK",
    payload: {
      draggedItemId,
      hoveredItemId,
      sourceColumnId,
      targetColumnId,
    },
  };
}