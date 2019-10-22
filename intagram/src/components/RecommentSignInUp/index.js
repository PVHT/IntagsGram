import React from "react";

import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const ContainerRecomment = styled.div`
    background:#ffffff;
    border:1px solid #E6e6e6;
    display:flex;
    width:350px;
    justify-content:center;
    font-size:14px;
`;

class Login extends React.Component {
    render() {
        const lblRecomment = this.props.recomment;
        const action = this.props.action;
        return (
            <ContainerRecomment className="py-4 mx-auto" id="containerRecomment">
                <p style={{margin:0}}>{lblRecomment}</p>
                <a href="/#" style={{fontWeight:"600",color:"#3897f0"}}> {action}</a>
            </ContainerRecomment>
        );
    }
}

export default Login;
