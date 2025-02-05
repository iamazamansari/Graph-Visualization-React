import React, { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  NodeChange,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setGraphState } from "../redux/historySlice";
import NodeCustomizationPanel from "./NodeCustomizationPanel";

const CustomNode = ({ id, data, selected }: any) => (
  <div
    style={{
      padding: 10,
      backgroundColor: data.color || "#ffffff",
      fontSize: data.fontSize || 16,
      borderRadius: 5,
      border: selected ? "2px solid #1a192b" : "1px solid #1a192b",
      minWidth: 80,
      textAlign: "center",
    }}
  >
    <Handle type="target" position={Position.Left} />
    {data.label}
    <Handle type="source" position={Position.Right} />
  </div>
);

const GraphContainer: React.FC = () => {
  const { present } = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();
  const nodes = present.nodes;
  const edges = present.edges;

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const updatedNodes = applyNodeChanges(changes, nodes);
      dispatch(setGraphState({ nodes: updatedNodes, edges }));
    },
    [nodes, edges, dispatch]
  );

  const selectedNode = nodes.find((node) => node.selected);
  const selectedNodeId = selectedNode?.id || null;

  const handleColorChange = (color: string) => {
    if (!selectedNodeId) return;
    const updatedNodes = nodes.map((node) =>
      node.id === selectedNodeId
        ? { ...node, data: { ...node.data, color } }
        : node
    );
    dispatch(setGraphState({ nodes: updatedNodes, edges }));
  };

  const handleFontSizeChange = (fontSize: number) => {
    if (!selectedNodeId) return;
    const updatedNodes = nodes.map((node) =>
      node.id === selectedNodeId
        ? { ...node, data: { ...node.data, fontSize } }
        : node
    );
    dispatch(setGraphState({ nodes: updatedNodes, edges }));
  };

  return (
    <div
      className="graph-container"
      style={{ width: "100%", height: "600px", border: "1px solid #ddd" }}
    >
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          type: "custom",
          draggable: true,
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={{ custom: CustomNode }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <NodeCustomizationPanel
        selectedNodeId={selectedNodeId}
        onColorChange={handleColorChange}
        onFontSizeChange={handleFontSizeChange}
      />
    </div>
  );
};

export default GraphContainer;
