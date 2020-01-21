import React from "react";
import { StatusBar, YellowBox } from "react-native";

import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40E7" />
      <Routes />
    </>
  );
}

export default App;
