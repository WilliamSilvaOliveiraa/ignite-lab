import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";
import React from "react";

import { Event } from "./pages/Event";

function App() {
  return (
    <div>
      <Event />
    </div>
  );
}

export default App;
