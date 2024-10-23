import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavComponent = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  const [matches2, setMatches2] = useState(
    window.matchMedia("(min-width: 557px)").matches
  );
  const [matches3, setMatches3] = useState(
    window.matchMedia("(max-width: 440px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)") //571px
      .addEventListener("change", (e) => setMatches(e.matches));
    window
      .matchMedia("(min-width: 557px)")
      .addEventListener("change", (e) => setMatches2(e.matches));
    window
      .matchMedia("(max-width: 440px)")
      .addEventListener("change", (e) => setMatches3(e.matches));
  }, []);

  let location = useLocation();
  const path = location;
  const [toggled, setToggled] = useState(false);

  return (
    <div id="wrapper" className="clearfix">
      <header
        id="header"
        className="transparent-header"
        style={matches ? { position: "absolute" } : {}}
      >
        <div
          id="header-wrap"
          style={
            matches
              ? {
                  backgroundColor: "rgba(255,255,255,0.5)",
                }
              : {}
          }
        >
          <div className="container">
            <div className="header-row">
              <div id="logo">
                <a href="/elsalt/" className="standard-logo">
                  <img
                    src="/elsalt/logo.jpg"
                    alt="logo"
                    style={{
                      marginTop: "-10px",
                    }}
                  />
                </a>
              </div>
              <div id="primary-menu-trigger">
                <svg className="svg-trigger" viewBox="0 0 100 100">
                  <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                  <path d="m 30,50 h 40"></path>
                  <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
                </svg>
              </div>

              <nav className="primary-menu">
                <ul className="menu-container">
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>빛과소금내과 소개</div>
                    </a>
                    <ul className="sub-menu-container">
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/intro">
                          <div>인사말</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/hi">
                          <div>HI</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/merit">
                          <div>빛과소금내과 장점</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>언론보도자료</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/way">
                          <div>오시는 길</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice2">
                          <div>공지사항</div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>진료안내</div>
                    </a>
                    <ul className="sub-menu-container">
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/activity">
                          <div>진료시간</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>증명원</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>시설안내 및 검사정보</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>관련 사이트</div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>종합건강검진센터</div>
                    </a>
                    <ul className="sub-menu-container">
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/healthcenter_1">
                          <div>일반종합검진</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>국민건강보험공단종합검진</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>일반건강검진 종류 및 진단서</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>빛과소금내과 종합검진장점</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/calendar">
                          <div>시설안내 및 검사정보</div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>류마티스전문클리닉</div>
                    </a>
                    <ul className="sub-menu-container">
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>류마티스란?</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>류마티스 자가진단법</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>류마티스질병분류</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>질병정보</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>의학컬럼</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>관절염극복방법</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>자료실</div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>온라인상담</div>
                    </a>
                    <ul className="sub-menu-container">
                      <li className="menu-item">
                        <a className="menu-link" href="/elsalt/notice">
                          <div>온라인상담</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* {matches3 && getSmallViewLoginMenu()} */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-wrap-clone"></div>
      </header>
    </div>
  );
};

export default NavComponent;
