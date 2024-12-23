import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../containers/Landing";
import RemoveBackgroundPage from "../containers/RemoveBackground";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/remove-background" element={<RemoveBackgroundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
