import React from "react";
import { pages } from "./pages";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<pages.Main testValue={10} />} />
        <Route path="/player" element={<pages.Player />} />
        <Route path="editor" element={<pages.Editor />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
