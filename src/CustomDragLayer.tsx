import { useDragLayer } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";
import { Column } from "./Column";

/**
 *  create a custom drag layer component to handle the drag and drop functionality
 * @returns The custom drag layer component
 */
export default function CustomDragLayer() {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
}
