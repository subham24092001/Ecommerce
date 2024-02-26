import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// CSS
import "./index.css";
// context
import { CartProvider,ProductProvider} from "./contexts";
import { Provider } from "react-redux";
import store from "./store/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </CartProvider>
  </Provider>
);
