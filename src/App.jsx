import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Intro from "./pages/Tabs/1/Intro";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hi from "./pages/Tabs/1/Hi";
import Merit from "./pages/Tabs/1/Merit";
import FixTabLayout from "./pages/Tabs/FixTabLayout";
import Notice from "./pages/Tabs/1/Notice";
import Item from "./pages/Tabs/1/Notice/Item";
import Tab3_1 from "./pages/Tabs/3/Tab3_1";
import Tab3_2 from "./pages/Tabs/3/Tab3_2";

function App() {
  return (
    <div>
      <BrowserRouter basename="/elsalt">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/" element={<FixTabLayout />}>
              <Route exact path="/intro" element={<Intro />} />
              <Route exact path="/hi" element={<Hi />} />
              <Route exact path="/merit" element={<Merit />} />
              <Route exact path="/notice" element={<Notice />} />
              <Route exact path="/notice/:id" element={<Item />} />

              {/* Tab 3 */}

              <Route exact path="/healthcenter_1" element={<Tab3_1 />} />
              <Route exact path="/healthcenter_2" element={<Tab3_2 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
