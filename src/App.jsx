import React, { useState } from "react";
import Welcome from "./Welcome";
import Signin from "./Signin";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <Welcome user={user} setUser={setUser} />
      ) : (
        <Signin setUser={setUser} />
      )}
    </div>
  );
}

export default App;
