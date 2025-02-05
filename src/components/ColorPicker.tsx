import React from "react";
import { useDispatch } from "react-redux";
import { updateNodeColor } from "../redux/graphSlice";

interface ColorPickerProps {
  selectedNodeId: string | null;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedNodeId, onChange }) => {
  const dispatch = useDispatch();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedNodeId) {
      dispatch(
        updateNodeColor({ id: selectedNodeId, color: event.target.value })
      );
      onChange(event.target.value);
    }
  };

  return (
    <div className="control-item">
      <label className="control-label">Node Color:</label>
      <input
        type="color"
        className="color-input"
        onChange={handleColorChange}
        disabled={!selectedNodeId}
        defaultValue="#ffffff"
      />
    </div>
  );
};

export default ColorPicker;
