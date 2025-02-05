export interface NodeData {
  label: string;
  color: string;
  fontSize: number;
}

export interface Node {
  selected: unknown;
  id: string;
  position: { x: number; y: number };
  data: NodeData;
  type?: string;
  draggable?: boolean;
  dragHandle?: string;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  type?: string;
  sourceHandle?: string;
  targetHandle?: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface HistoryState {
  past: Action[];
  present: { nodes: Node[]; edges: Edge[] };
  future: Action[];
}
