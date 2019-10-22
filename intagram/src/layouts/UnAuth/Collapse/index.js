import React from "react";
// import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./style.css";


const menuUnAuth = [
  {
    key: "0",
    title: "TÙY CHỌN",
    part: "",
    disabled: true,
    class: "thum",
  },
  {
    key: "1",
    title: "Đăng ký",
    part: "/#",
    disabled: false,
  },
  {
    key: "2",
    title: "Đăng nhập",
    part: "/#",
    disabled: false,
  },
  {
    key: "3",
    title: "Tải xuống ứng dụng",
    part: "/#",
    disabled: false,
  },
  {
    key: "4",
    title: "Ngôn ngữ",
    part: "/#",
    disabled: false,
    select: true,

  },
  {
    key: "5",
    title: "GIỚI THIỆU",
    part: "",
    disabled: true,
    class: "thum",
  },
  {
    key: "6",
    title: "Quảng cáo",
    part: "/#",
    disabled: false,
  },
  {
    key: "7",
    title: "Trung tâm trợ giúp",
    part: "/#",
    disabled: false,
  },
  {
    key: "8",
    title: "Khác",
    part: "/#",
    disabled: false,
  },
];
const dataLocates = [
  {
    key: "en",
    value: "English",
    active: false,
  },
  {
    key: "vn",
    value: "Tiếng Việt",
    active: true,
  }
]

export default class CollapseUnAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navTitle: "Tùy chọn",
      toggleMenu: false,
      selectedId: dataLocates[1].value,
    }
  }
  handleToggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu,
    })
  }

  handlePeriodChange = (e) => {
    this.setState({
      selectedId: e.target.value,
    })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-white" id="menuCollapse">
        <button className="navbar-toggler d-lg-none border-0 position-absolute w-10" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation" id="btn-collapse">
          <span className="font-weight-bold float-left" id="toggle-icon" onClick={this.handleToggleMenu}></span>
        </button>
        {this.state.toggleMenu === false ? 
        <select className="form-control" id="locates" key="locates" value={this.state.selectedId} onChange={this.handlePeriodChange}>
          {dataLocates.map(i => (
            <option value={i.value} key={i.key}>{i.value}</option>
          ))}
        </select>
          :
          <p className="font-weight-bold text-center" id="toggle-title">{this.state.navTitle}</p>
        }
        <div className="collapse navbar-collapse w-100" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 menuUnAuth mt-4" id="menuUnAuth">
            {menuUnAuth.map(i => (
              i.select ?
                <select
                  className="form-control toggelled w-100"
                  id="locates"
                  key="locatesToggelled"
                  value={this.state.selectedId} onChange={this.handlePeriodChange}
                >
                  {dataLocates.map(i => (
                    <option value={i.value} key={i.key}>{i.value}</option>
                  ))}
                </select>
                :
                <li className="nav-item  w-100" key={i.key} id={i.class} >
                  <a className="nav-link" href={i.part} disabled={i.disabled}>{i.title}</a>
                </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
}
