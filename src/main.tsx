import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { client } from "./lib/apollo";

import "./styles/global.css";
import { ApolloProvider } from "@apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
