import React from "react";

import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Recomment from '../../components/RecommentSignInUp';
import Download from '../../components/DownloadApp';

import LogoTitle from '../../asset/LogoTitle.png';
// import FBIcon from '../../asset/FBIcon.png';

const ContainerLogin = styled.div`
    background:#ffffff;
    border:1px solid #E6e6e6;
    display:flex;
    justify-content:center;
    flex-flow:column;
    margin: 0 0 1% 0;
    width:350px;
`;

const Title = styled.img`
    width:80%;
    margin:0 auto;
    margin-top:5%;
    margin-bottom:3%;
`;

// const InputCustom = styled.input`
//     font-size:12px;
//     line-height:18px;
//     color:black !important;
//     padding:7% 4%;
//     background-color:#fafafa;
//     margin-bottom:5px;
//     border:1px solid #EFEFEF !important;
// `;

// const ButtonCustom = styled.button`
//     margin:3% 0;
//     width:100%;
//     background-color:#3897F0;
// `;

// const LineCustom = styled.div`
//     -webkit-box-flex: 1;
//     -ms-flex-positive: 1;
//     -ms-flex-negative: 1;
//     background-color: #efefef;
//     height: 1px;
//     position: relative;
//     top: .45em;
// `;
// const WrapperMethod = styled.div`
//     position:relative;
//     margin:10px 0
// `;

// const BtnLoginFB = styled.div`
//     border:none;
//     background:none;
//     font-size:14px;
//     font-weight:600;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     margin-top:4%;
//     color:#385185;
//     text-align:center;

// `;

// const TextCustom = styled.div`
//     color: #999;
//     background-color:#ffffff;
//     text-align:center;
//     font-size: 13px;
//     font-weight: 600;
//     line-height: 15px;
//     margin: 0 auto;
//     text-transform: uppercase;
//     position:relative;
//     width:30%;
// `;

// const LblForgot = styled.p`
//     margin:8% 0 0 0;
//     text-align:center;
//     font-size:12px;
// `;

const CapRegister = styled.p`
    color:#999999;
    text-align:center;
    font-size:17px;
    font-weight:600;
    line-height:20px;
`;
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Instagram",
            lblLoginFB: "Đăng nhập bằng Facebook",
            lblLogin: "Đăng nhập",
            placeholderUsername: "Số điện thoại, tên người dùng hoặc email",
            placeholderPassword: "Mật khẩu",
            or: "Hoặc",
            lblRecomment: "Bạn không có tài khoản? ",
            actionRecomment: "Đăng ký",
            lblForgot: "Quên mật khẩu?",
            capRegister:"Đăng ký để xem ảnh và video từ bạn bè.",
        }
    }
    render() {
        return (
            <>  
                <ContainerLogin className="px-5 pb-3 mb-2 mx-auto" id="containerLogin">
                    <Title src={LogoTitle}></Title>
                    <CapRegister>{this.state.capRegister}</CapRegister>
                </ContainerLogin>
                <Recomment action={this.state.actionRecomment} recomment={this.state.lblRecomment} />
                <Download />
            </>
        );
    }
}

export default Login;
