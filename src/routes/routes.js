import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export const MainRoutes = () => (
  <Routes>
      <Route path="*" element={<Dashboard />} />
  </Routes>
);
