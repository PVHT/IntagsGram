import React from "react";

import "./Layout.style.css";
import styled from "styled-components";


import FooterUnAuth from "./Footer/";
import CollapseUnAuth from "./Collapse/";
import { UnAuthContent } from "../../routes/UnAuth.route";

const StyledLayout = styled.div`
  width:100%;
  padding:1% 0;
  background:#fafafa;
  height:100%;
`;

export default class UnAuthLayout extends React.Component {
  render() {
    return (
      <div>
        <StyledLayout id="wrapperUnAuth">
          {/* Header */}
          <CollapseUnAuth/>
          {/* Routes link  */}
          <UnAuthContent />
          {/* Footer */}
          <FooterUnAuth />
        </StyledLayout>
      </div>
    );
  }
}
