/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "App";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MaterialUIControllerProvider } from "context";

const queryClient = new QueryClient();

// Material Dashboard 2 React Context Provider

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
