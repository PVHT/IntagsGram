import React from "react";

import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Android from "../../asset/DownloadAnroid.png";
import IOS from "../../asset/DownloadIOS.png";

const ContainerDownload = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    flex-flow:column;
    padding:1% 3%;
    font-size:14px;
    margin-top:10px;

`;

const WrapperDownload = styled.div`
    display:flex;
    width:350px;
    justify-content:center;
    margin-top:30px;
`;

class DownloadApp extends React.Component {
    render() {
        return (
            <ContainerDownload id="containerDownload">
                <span>Tải ứng dụng</span>
                <WrapperDownload id="wrapperDownload">
                    <a href="/#"  style={{marginRight:"3%"}}><img className="logoDownLoad" src={IOS} alt="Download for IOS" width="136" height="40" /></a>
                    <a href="/#"><img className="logoDownLoad" src={Android} alt="Download for Android" width="136" height="40" /></a>
                </WrapperDownload>
            </ContainerDownload>
        );
    }
}

export default DownloadApp;
