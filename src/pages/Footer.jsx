import React from "react";

export default function Footer() {
  return (
    <div className="sticky-footer">
      <footer id="footer" className="dark">
        <div id="copyrights">
          <div className="container">
            <div className="row col-mb-30">
              <div className="col-md-6 text-center text-md-start">
                Copyright © {new Date().getFullYear()} 빛과 소금내과 All rights
                reserved.
                <br />
                <br />
                <div>
                  <img
                    src="/elsalt/logo.jpg"
                    alt=""
                    style={{
                      backgroundColor: "rgb(255,255,255, 0.7)",
                      paddingRight: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                {/* <div className="copyright-links">
                <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
              </div> */}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="clear"></div>
                병원명: 빛과 소금내과 &nbsp;&nbsp;병원장: 김우규
                &nbsp;&nbsp;전화: 031-905-8175 / 070-4288-8175 <br />
                주소: 경기도 고양시 일산동구 일산로 240(백마프라자
                2층)&nbsp;&nbsp; 사업자등록번호: 128-90-95198
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
