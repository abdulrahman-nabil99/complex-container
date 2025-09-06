import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function FullPageMessage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
      }}
    >
      <div>El-Zaref</div>
      <div>1x000 EGP - 100EGP KPI</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        {/* Full page route (no header, no logo) */}
        <Route path="/fullpage" component={FullPageMessage} />

        {/* Default layout with header */}
        <Route>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
              <Link to="/fullpage">Full Page</Link>
            </header>
            <div>
              <Route exact path="/" component={Fib} />
              <Route path="/otherpage" component={OtherPage} />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
