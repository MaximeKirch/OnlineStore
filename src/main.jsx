import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import "@fontsource/kumbh-sans/400.css";
import "@fontsource/kumbh-sans/700.css";
import Layout from "./Layout/Layout.jsx";
import Collections from "./views/Homepage/Collections/Collections";
import Men from "./views/Homepage/Men/Men";
import Women from "./views/Homepage/Women/Women";
import Contact from "./views/Homepage/Contact/Contact";
import About from "./views/Homepage/About/About";
import Account from "./views/Homepage/Account";
import ProductDetail from "./views/Homepage/Collections/Partials/ProductDetail";
import Dashboard from "./views/Dashboard/Dashboard/index"
import Profile from "./views/Dashboard/Profile/index"
import SignIn from "./views/Auth/SignIn"
import SignUp from "./views/Auth/SignUp"
import Checkout from "./views/Homepage/Checkout/Checkout"

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
  {
    path: "signin",
    element: (
      <Layout>
        <SignIn/>
      </Layout>
    )
  },
  {
    path: "dashboard",
    element: (
      <Layout>
        <Dashboard/>
      </Layout>
    )
  },
  {
    path: "dashboard/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "sign-in",
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: "sign-up",
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
  {
    path: "checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
]);



store.dispatch(fetchProducts())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router}>
          </RouterProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
