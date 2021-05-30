import React from "react";
import { Switch, Route } from "react-router";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
