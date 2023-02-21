import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

import { store, persistor } from "./Redux/store.js";
import { Provider } from "react-redux";
import { fetchProducts } from "./Redux/Reducers/products";

import { PersistGate } from "redux-persist/integration/react";

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
    path: "collections",
    element: (
      <Layout>
        <Collections />
      </Layout>
    ),
  },
  {
    path: "collections/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "men",
    element: (
      <Layout>
        <Men />
      </Layout>
    ),
  },
  {
    path: "women",
    element: (
      <Layout>
        <Women />
      </Layout>
    ),
  },
  {
    path: "account",
    element: (
      <Layout>
        <Account />
      </Layout>
    ),
  },
  {
    path: "about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);



store.dispatch(fetchProducts())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
        <ChakraProvider theme={theme}>
        </ChakraProvider>
      </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
