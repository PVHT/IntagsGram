import React from "react";
import styled from "styled-components";
import "./style.css";

const LblCopyRight = styled.p`
    color:#999999;
    font-size:12px;
    width:100%;
    text-align:left;
    overflow:hidden;
`;

const menu = [
  {
      key: "0",
      title: "GIỚI THIỆU VỀ CHÚNG TÔI",
      part: "/#"
  },
  {
      key: "2",
      title: "HỖ TRỢ",
      part: "/#"
  },
  {
      key: "3",
      title: "BÁO CHÍ",
      part: "/#"
  },
  {
      key: "4",
      title: "API",
      part: "/#"
  },
  {
      key: "5",
      title: "VIỆC LÀM",
      part: "/#"
  },
  {
      key: "6",
      title: "QUYỀN RIÊNG TƯ",
      part: "/#"
  },
  {
      key: "7",
      title: "ĐIỀU KHOẢN",
      part: "/#"
  },
  {
      key: "8",
      title: "THƯ MỤC",
      part: "/#"
  },
  {
      key: "9",
      title: "TRANG CÁ NHÂN",
      part: "/#"
  },
  {
      key: "10",
      title: "HASHTAG",
      part: "/#"
  },
  {
      key: "11",
      title: "NGÔN NGỮ",
      part: "/#"
  },
]
export default class FooterUnAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      copyRight: "© 2019 INSTAGRAM FROM CODEV",
    }
  }
  render() {
    return (
      <div className=" pl-6" id="wrapperNavFooter">
        <ul className="w-100 p-0 d-block" id="navFooter">
          {menu.map(i => (
            <li key={i.key}>
              <a href={i.part}>{i.title}</a>
            </li>
          ))}
        </ul>
        <LblCopyRight id="lblCopyRight">{this.state.copyRight}</LblCopyRight>
      </div>
    );
  }
}
