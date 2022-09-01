import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
// Queremos que los users se carguen apenas cargue la app:
import { fetchUsers } from "./features/users/usersSlice";
store.dispatch(fetchUsers());

// Si no saco el Strict Mode, se renderizan 2 veces los posts
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
