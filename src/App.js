import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Bible from "./screens/Bible";
import Documentation from "./screens/Documentation";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import BibleContent from './screens/BibleContent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="bible" element={<Bible />} />
          <Route path="apidocumentation" element={<Documentation />} />
          <Route path="/biblecontent" element={<BibleContent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
