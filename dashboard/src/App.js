import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/products/Products";
import ProductDetils from "./pages/single/ProductDetails";
import NewProduct from "./pages/new/NewProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import TestProductData from "./components/productTable/testProductTable";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="testview" element={<TestProductData/>} />
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="productDetils" element={<ProductDetils />} />
            <Route path="/products">
              <Route index element={<List />} />
              <Route path=":productId" element={<ProductDetils />} />
              <Route
                path="new-product"
                element={<NewProduct inputs={productInputs} title="Add New Product" />}
              />
            </Route>            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
