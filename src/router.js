import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";

/****site route*****/
//  Home page
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Mint = lazy(() => import("./pages/Mint"));
const Redeem = lazy(() => import("./pages/Redeem"));
const Farms = lazy(() => import("./pages/Farms"));
const Staking = lazy(() => import("./pages/Staking"));

const AppRouter = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/mint" component={Mint} />
        <Route exact path="/redeem" component={Redeem} />
        <Route exact path="/farms" component={Farms} />
        <Route exact path="/staking" component={Staking} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;
