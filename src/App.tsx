import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GraphContainer from "./components/GraphContainer";
import "./App.css"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React Flow Graph Visualization</h1>
        <GraphContainer />
      </div>
    </Provider>
  );
};

export default App;
