import { Route, Routes } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";
import Table from "../components/Table";
import DropDownPage from "../pages/DropDownPage";
import ModelPage from "../pages/ModelPage";
import Stepper from "../pages/Stepper";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="model" exact element={<ModelPage />} />
      <Route path="card" exact element={<Card />} />
      <Route path="stepper" exact element={<Stepper />} />
      <Route path="dropdown" exact element={<DropDownPage />} />
 <Route path="table" exact element={<Table />} />

  </Routes>
  );
};

export const MainRoutes = () => (
  <Routes>
      <Route
        path="*"
        element={
            <Layout>
              <NavRoutes />
            </Layout>
        }
      />
  </Routes>
);
