import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { OpenProvider } from "./components/Context";

import Home from "./pages/Home";
import Results from "./pages/Results";
import ByGenre from "./pages/ByGenre";
import AppBar from "./components/AppBar";

const App = ({ store }) => (
  <Provider store={store}>
    <OpenProvider>
      <Router>
        <AppBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route exact path="/genre/:id" component={ByGenre} />
        </div>
      </Router>
    </OpenProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
