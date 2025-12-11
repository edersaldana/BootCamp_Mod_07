import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "@/app/home/home";
import ProductScreen from "@/app/product/product";
import ProductsScreen from "@/app/products/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/products",
    element: <ProductsScreen />,
  },
  {
    path: "/products/:id",
    element: <ProductScreen />,
  },
]);
