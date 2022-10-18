import React from "react";
import { pages } from "./pages";

// Routes로 하위 페이지들을 감싸고
// Route를 이용하여 각 페이지를 할당
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Route의 path로 갈 곳을 지정 element로 해당 페이지에
        불러올 컴포넌트를 지정 */}
        <Route path="/" element={<pages.Main testValue={10} />} />
        <Route path="/player" element={<pages.Player />} />
        <Route path="/editor" element={<pages.Editor />} />
        {/* /:params 형태로 주소에 파라미터로 받아올 값을 지정할 수 있음
        복수로 사용 가능 */}
        <Route
          path="/multipage/:id/:name/:gender"
          element={<pages.Multipage />}
        />
        <Route path="/counter" element={<pages.Counter />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
