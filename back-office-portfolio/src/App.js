import React from "react";
import { Switch, Route } from "react-router-dom";
import AddProject from "./Components/AddProject";
import NavBar from "./Components/NavBar";
import ProjectList from "./Components/ProjectList";
const App = () => {
  const baseURI = "http://localhost:5000";
  return (
    <section id="realisations">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <ProjectList {...props} />}
          baseURI={baseURI}
        />
        <Route
          exact
          path="/add-project"
          render={(props) => <AddProject {...props} />}
          baseURI={baseURI}
        />
      </Switch>
      <NavBar />
    </section>
  );
}
export default App;
