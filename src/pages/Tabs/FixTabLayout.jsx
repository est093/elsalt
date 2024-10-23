import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import path from "../../utils/path.json";
import "../../css/etc.css";
export default function FixTabLayout() {
  let location = useLocation();
  let name = "";

  let x = location.pathname.split("/");
  if (x.length >= 3) {
    name = path["/" + x[1]];
  } else {
    name = path[location.pathname];
  }
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)") //571px
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <section id="content">
      <div className="content-wrap">
        <div className="container">
          <div className="header-wrap-clone"></div>
          <div>
            <img
              src="/elsalt/elsalt/sv_img.jpg"
              className="parallax-bg"
              style={{ width: "100%" }}
            />
            <div
              className="container breadcrumbfont_diff"
              style={
                matches
                  ? {}
                  : {
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px",
                    }
              }
            >
              {matches && <br />}
              <h3>{name}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">홈</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">빛과소금내과소개</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <hr />
          {<Outlet />}
        </div>
      </div>
    </section>
  );
}
