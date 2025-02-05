import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, Edge } from '../type';

interface HistoryState {
  past: { nodes: Node[]; edges: Edge[] }[];
  present: { nodes: Node[]; edges: Edge[] };
  future: { nodes: Node[]; edges: Edge[] }[];
}

const initialState: HistoryState = {
  past: [],
  present: {
    nodes : [
      {
        id: "1",
        type: "custom",
        draggable: true,
        position: { x: 50, y: 50 },
        data: { label: "Node 1", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "2",
        type: "custom",
        draggable: true,
        position: { x: 250, y: 50 },
        data: { label: "Node 2", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "3",
        type: "custom",
        draggable: true,
        position: { x: 450, y: 50 },
        data: { label: "Node 3", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "4",
        type: "custom",
        draggable: true,
        position: { x: 50, y: 200 },
        data: { label: "Node 4", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "5",
        type: "custom",
        draggable: true,
        position: { x: 250, y: 200 },
        data: { label: "Node 5", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "6",
        type: "custom",
        draggable: true,
        position: { x: 450, y: 200 },
        data: { label: "Node 6", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "7",
        type: "custom",
        draggable: true,
        position: { x: 50, y: 350 },
        data: { label: "Node 7", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "8",
        type: "custom",
        draggable: true,
        position: { x: 250, y: 350 },
        data: { label: "Node 8", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "9",
        type: "custom",
        draggable: true,
        position: { x: 450, y: 350 },
        data: { label: "Node 9", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
      {
        id: "10",
        type: "custom",
        draggable: true,
        position: { x: 250, y: 500 },
        data: { label: "Node 10", color: "#ffffff", fontSize: 16 },
        selected: undefined
      },
    ],
    edges: [
      // Horizontal connections
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2-3', source: '2', target: '3', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true },
      { id: 'e5-6', source: '5', target: '6', animated: true },
      { id: 'e7-8', source: '7', target: '8', animated: true },
      { id: 'e8-9', source: '8', target: '9', animated: true },
      // Vertical connections
      { id: 'e1-4', source: '1', target: '4', animated: true },
      { id: 'e4-7', source: '4', target: '7', animated: true },
      { id: 'e2-5', source: '2', target: '5', animated: true },
      { id: 'e5-8', source: '5', target: '8', animated: true },
      { id: 'e8-10', source: '8', target: '10', animated: true },
      { id: 'e3-6', source: '3', target: '6', animated: true },
      { id: 'e6-9', source: '6', target: '9', animated: true },
    ],
  },
  future: []
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setGraphState: (state, action: PayloadAction<{ nodes: Node[]; edges: Edge[] }>) => {
      state.past.push(state.present);
      state.present = action.payload;
      state.future = [];
    },
    undo: (state) => {
      if (state.past.length > 0) {
        const previous = state.past[state.past.length - 1];
        state.past = state.past.slice(0, -1);
        state.future = [state.present, ...state.future];
        state.present = previous;
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const next = state.future[0];
        state.future = state.future.slice(1);
        state.past = [...state.past, state.present];
        state.present = next;
      }
    }
  }
});

export const { setGraphState, undo, redo } = historySlice.actions;
export default historySlice.reducer;
