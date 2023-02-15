import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider , BrowserRouter } from "react-router-dom";
import theme from "./theme";
import "@fontsource/kumbh-sans/400.css";
import "@fontsource/kumbh-sans/700.css";
import Layout from "./Layout/Layout.jsx";
import Collections from "./views/Collections";
import Men from "./views/Men";
import Women from "./views/Women";
import Contact from "./views/Contact";
import About from "./views/About";
import Account from "./views/Account";
import ProductDetail from "./views/ProductDetail";

import { store } from "./Redux/store.js";
import { Provider } from "react-redux";
import { fetchProducts } from "./Redux/Reducers/products";

store.dispatch(fetchProducts())

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
        </Layout>
    ),
  },
  {
    path: "Collections",
    element: (
      <Layout>
        <Collections />
        </Layout>
    ),
  },
  {
    path: "Collections/:id",
    element: (
      <Layout>
        <ProductDetail />
        </Layout>
    ),
  },
  {
    path: "Men",
    element: (
      <Layout>
        <Men />
        </Layout>
    ),
  },
  {
    path: "Women",
    element: (
      <Layout>
        <Women />
        </Layout>
    ),
  },
  {
    path: "Account",
    element: (
      <Layout>
        <Account />
        </Layout>
    ),
  },
  {
    path: "About",
    element: (
      <Layout>
        <About />
        </Layout>
    ),
  },
  {
    path: "Contact",
    element: (
      <Layout>
        <Contact />
        </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}>
      <ChakraProvider resetCSS theme={theme}>
      </ChakraProvider>
    </RouterProvider>
      </Provider>
  </React.StrictMode>,
);
