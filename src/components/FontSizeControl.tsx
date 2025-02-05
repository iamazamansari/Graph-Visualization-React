import React from "react";
import { useDispatch } from "react-redux";
import { updateFontSize } from "../redux/graphSlice";

interface FontSizeControlProps {
  selectedNodeId: string | null;
  onChange: (fontSize: number) => void;
}

const FontSizeControl: React.FC<FontSizeControlProps> = ({
  selectedNodeId,
  onChange,
}) => {
  const dispatch = useDispatch();

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectedNodeId) {
      const fontSize = Number(event.target.value);
      dispatch(updateFontSize({ id: selectedNodeId, fontSize }));
      onChange(fontSize);
    }
  };

  return (
    <div className="control-item">
      <label className="control-label">Font Size:</label>
      <select
        className="font-select"
        onChange={handleFontSizeChange}
        disabled={!selectedNodeId}
        defaultValue="16"
      >
        {[12, 14, 16, 18, 20, 22, 24].map((size) => (
          <option key={size} value={size}>
            {size}px
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSizeControl;
