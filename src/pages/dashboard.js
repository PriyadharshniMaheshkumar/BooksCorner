import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../styles.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Home } from "../components/home";
import { Authors } from "../pages/authors";
import { Books } from "../pages/books";

export const PageDashboard = () => {
  return (
    <>
      <div className="page-base">
        <BrowserRouter>
          <div>
            <div className="header">
              <Header />
            </div>
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/authors">
                <Authors />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
            </Switch>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};
