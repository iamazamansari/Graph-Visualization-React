import React from "react";
import ColorPicker from "./ColorPicker";
import FontSizeControl from "./FontSizeControl";
import { undo, redo } from "../redux/historySlice";
import { useDispatch } from "react-redux";

interface NodeCustomizationPanelProps {
  selectedNodeId: string | null;
  onColorChange: (color: string) => void;
  onFontSizeChange: (fontSize: number) => void;
}

const NodeCustomizationPanel: React.FC<NodeCustomizationPanelProps> = ({
  selectedNodeId,
  onColorChange,
  onFontSizeChange,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="controls-panel">
      <ColorPicker selectedNodeId={selectedNodeId} onChange={onColorChange} />
      <FontSizeControl
        selectedNodeId={selectedNodeId}
        onChange={onFontSizeChange}
      />
      <div className="undo-redo-buttons">
        <button className="control-button" onClick={() => dispatch(undo())}>
          Undo
        </button>
        <button className="control-button" onClick={() => dispatch(redo())}>
          Redo
        </button>
      </div>
    </div>
  );
};

export default NodeCustomizationPanel;
