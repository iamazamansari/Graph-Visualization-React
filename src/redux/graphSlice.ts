import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, Edge } from '../type';

interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

const initialState: GraphState = {
  nodes: Array.from({ length: 10 }, (_, i) => ({
    id: `node-${i}`,
    type: 'custom', 
    position: { x: Math.random() * 400, y: Math.random() * 400 },
    data: { label: `Node ${i + 1}`, color: "#000", fontSize: 16 },
    draggable: true,
  })),
  edges: [],
};


const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    updateNodeColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
      const node = state.nodes.find(n => n.id === action.payload.id);
      if (node) node.data.color = action.payload.color;
    },
    updateFontSize: (state, action: PayloadAction<{ id: string; fontSize: number }>) => {
      const node = state.nodes.find(n => n.id === action.payload.id);
      if (node) node.data.fontSize = action.payload.fontSize;
    },
    updateNode(state, action) {
      const nodeIndex = state.nodes.findIndex((n) => n.id === action.payload.id);
      if (nodeIndex !== -1) {
        state.nodes[nodeIndex] = action.payload;
      }
    },
  },
});

export const {updateNode, updateNodeColor, updateFontSize } = graphSlice.actions;
export default graphSlice.reducer;


