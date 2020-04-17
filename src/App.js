import React from "react";
import "./App.css";

// import {Container} from 'react-bootstrap';
import Home from "./components/subComponents/home/Home";
import About from "./components/subComponents/about/About";
import NotFound from "./components/subComponents/notfound/NotFound";
import Dictionary from "./components/subComponents/dictionary/Dictionary";
import Poetry from "./components/subComponents/poetry/Poetry";
import Books from "./components/subComponents/books/Books";
import Rasalay from "./components/subComponents/rasalay/Rasalay";
import Dayyou from "./components/subComponents/dayyou/Dayyou";
import News from "./components/subComponents/news/News";
import Intresting from "./components/subComponents/Intresting/Intresting";
import Admin from "./components/adminPages/admin/Admin";
import Dashbord from "./components/adminPages/dashbord/Dashbord";
import AdminBooks from "./components/adminPages/books/AdminBooks";
import AdminIntresting from "./components/adminPages/Intresting/AdminIntresting";
import AddBooks from "./components/adminPages/books/AddBooks";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dictionary" component={Dictionary} />
            <Route exact path="/poetry" component={Poetry} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/rasalay" component={Rasalay} />
            <Route exact path="/dayyou" component={Dayyou} />
            <Route exact path="/news" component={News} />
            <Route exact path="/intresting" component={Intresting} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/Dashbord" component={Dashbord} />
            <Route exact path="/adminBooks" component={AdminBooks} />
            <Route exact path="/adminIntresting" component={AdminIntresting} />
            <Route exact path="/adminBooks/AddBooks" component={AddBooks} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
