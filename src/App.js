import "assets/css/index.css";

import Dashboard from "pages/Dashboard";
import Products from "pages/Products";

import NotFound from "pages/NotFound";

import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "@goalabs.id/react-shared-components/dist/components/Modal";
import modalConfigs from "lib/configs/modalProvider";

function App() {
  return (
    <div className="App bg-[#E5E5E5]">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ModalProvider options={modalConfigs} />
    </div>
  );
}

export default App;
