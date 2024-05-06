import { DragItem } from "../DragItem";
import { useAppState } from "../state/AppStateContext";
import { useDrag } from "react-dnd";
import { setDraggedItem } from "../state/action";

export function useItemDrag(item: DragItem) {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  return { drag };
}
