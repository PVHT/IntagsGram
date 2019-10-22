import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Layouts  & Containers
import UnAuthLayout from "../layouts/UnAuth/";


const WrapperUnAuthLayout = () => {
  return <UnAuthLayout/>;
};

class AppRoute extends React.Component {

  render() {
    return (
      <Router>
          <Route path={`/unauth`} component={WrapperUnAuthLayout}/>
      </Router>
    );
  }
}
export default AppRoute;
