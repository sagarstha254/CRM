import CommonLayout from "../../helpers/components/common/layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../../views/CRM/pages/Product.tsx";

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout type="large" />}>
          {/* Retail module routes */}
          <Route path="/" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
