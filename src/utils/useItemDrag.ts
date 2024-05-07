import { DragItem } from "../DragItem";
import { useAppState } from "../state/AppStateContext";
import { useDrag } from "react-dnd";
import { setDraggedItem } from "../state/action";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

/**
 * create a custom hook to handle the drag and drop functionality
 * @param item  The item to be dragged
 * @returns  The drag function
 */
export function useItemDrag(item: DragItem) {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
}
