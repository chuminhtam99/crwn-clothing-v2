import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  // 2. như vậy là ta đã cho mọi component thuộc app có đc quyền vào context, xem tiếp tại sign-in-form
  </React.StrictMode>,
  rootElement
);
