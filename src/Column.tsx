import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { addTask, moveList } from "./state/action";
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./utils/isHidden";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  /**
   * create a custom hook to handle the drop functionality
   * @type {*}
   */
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref} isHidden={isHidden(draggedItem, "COLUMN", id)}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
