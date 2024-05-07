import { DragItem } from "../DragItem";

/**
 *  Check if the item is hidden or not
 * @param draggedItem
 * @param itemType
 * @param id
 * @returns  A boolean value
 */
export function isHidden(
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  
): boolean {
  return Boolean(
    draggedItem && draggedItem.type === itemType && draggedItem.id === id
  );
}
