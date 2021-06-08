import React from "react";
import "./App.css";
import { CallLogList } from "./components/CallLogList";

const App: React.FC = () => {
  return (
    <div className="App m-t">
      <CallLogList />
    </div>
  );
};

export default App;
