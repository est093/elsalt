import React, { useEffect, useState } from "react";
import "../../css/fixednotice.css";
export default function FixedNotice() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  const [matches2, setMatches2] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [matches3, setMatches3] = useState(
    window.matchMedia("(max-width: 1200px)").matches
  );
  const [matches4, setMatches4] = useState(
    window.matchMedia("(max-width: 285px)").matches
  );
  const linkbox2 = () => {
    return (
      <div
        className="linkbox"
        style={
          matches4
            ? { width: "100%" }
            : matches2
            ? { width: "80%" }
            : matches
            ? { width: "100%" }
            : { width: "60%" }
        }
      >
        <div>
          <span className="bluetext">
            국민건강보험공단
            <br />
            공식 지정 종합 검진센터
          </span>
          <br />
          <span>✔ 직장(개인/단체) 건강검진</span>
          <br />
          <span>✔ 지역 건강검진</span>
          <br />
          <span>✔ 유·청소년 건강검진</span>
          <br />
          <span>✔ 여성 건강검진</span>
          <br />
          <span>✔ 채용신체검사</span>
        </div>
      </div>
    );
  };

  const linkbox = (text1, text2, islink2 = false) => {
    return (
      <div
        className="linkbox"
        style={
          matches4
            ? { width: "100%" }
            : matches2
            ? { width: "80%" }
            : matches
            ? { width: "100%" }
            : { width: "60%" }
        }
      >
        <div>
          <span className="bluetext">{text1}</span>
          <br />
          <span>{text2}</span>
        </div>
        {!islink2 && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)") //571px
      .addEventListener("change", (e) => setMatches(e.matches));

    window
      .matchMedia("(max-width: 768px)") //571px
      .addEventListener("change", (e) => setMatches2(e.matches));
    window
      .matchMedia("(max-width: 1200px)") //571px
      .addEventListener("change", (e) => setMatches3(e.matches));
    window
      .matchMedia("(max-width: 285px)") //571px
      .addEventListener("change", (e) => setMatches4(e.matches));
  }, []);
  return (
    <section id="content" style={{ padding: "0px 0px 0px 10px" }}>
      <div className="content-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="heading-block" style={{ marginTop: "20px" }}>
                <h1>
                  빛과소금내과
                  <br />
                  Light & Salt Internal Medicine
                </h1>
              </div>
              {/* <p className="lead">
                  ATPH선교회 웹사이트에 방문하신 것을 환영합니다.
                </p> */}
            </div>
          </div>
          <div className="my-0" style={{ textAlign: "center" }}>
            <div className="row mt-4 col-mb-50">
              <div
                className="col-lg-3"
                style={matches4 ? { fontSize: "8px" } : {}}
              >
                <div
                  className="heading-block border-bottom-0"
                  style={{ marginBottom: "15px" }}
                >
                  <h4>진료 시간 및 예약 안내</h4>
                </div>
                <p>
                  월·화·목·금: 오전08:30~오후05:30
                  <br />
                  <span style={{ color: "#1374b9", fontWeight: "bold" }}>
                    수·토·일: 오전08:30~오후12:30
                  </span>
                  <br />
                  점심시간: 오후12:30~오후02:00
                  <br />
                  휴진: 일요일, 공휴일
                </p>
                <p>
                  <img
                    src="/elsalt/elsalt/aside_banner3.jpg"
                    alt="전화"
                    width={
                      matches4
                        ? "100%"
                        : matches2
                        ? "80%"
                        : matches
                        ? "100%"
                        : "60%"
                    }
                  />
                </p>
                <p>
                  <img
                    src="/elsalt/elsalt/aside_banner4.jpg"
                    alt="찾아오시는 길"
                    width={
                      matches4
                        ? "100%"
                        : matches2
                        ? "80%"
                        : matches
                        ? "100%"
                        : "60%"
                    }
                  />
                </p>
              </div>
              <div className="col-lg-3 linkcontainer">
                {linkbox("인사말 바로가기", "Greeting")}
                {linkbox("종합건강검진센터", "Comprehensive medical")}
                {linkbox("류마티스전문 클리닉", "Rheumatis-clinic")}
                {linkbox("공지사항 바로가기", "What's News")}
              </div>
              <div className="col-lg-3 linkcontainer">
                {linkbox(
                  "➡️ 검진종목 바로가기",
                  "정확한 진단과 밑고 신뢰할 수 있는 전문 의료진과 최신의료기기에 의해 귀하의 건강상태를 체크합니다.",
                  true
                )}
                {linkbox2()}
              </div>
              <div className="col-lg-3">
                <div
                  className="heading-block border-bottom-0"
                  style={{ marginBottom: "15px" }}
                >
                  <h4>
                    빛과소금내과 미디어
                    <br />
                    <span style={{ fontSize: "10px" }}>Media Light & Salt</span>
                  </h4>
                </div>
                <p
                  style={
                    matches4
                      ? {
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          justifyContent: "center",
                        }
                  }
                >
                  <button
                    style={{
                      padding: "3px 10px 3px 10px",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "#1374b9",
                    }}
                  >
                    병원{matches3 && matches ? <br /> : ""}소개
                  </button>
                  <button
                    style={{
                      padding: "3px 10px 3px 10px",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "#1374b9",
                    }}
                  >
                    봉사{matches3 && matches ? <br /> : ""}진료
                  </button>
                  <button
                    style={{
                      padding: "3px 10px 3px 10px",
                      fontSize: "15px",
                      color: "white",
                      backgroundColor: "#1374b9",
                    }}
                  >
                    진료{matches3 && matches ? <br /> : ""}실
                  </button>
                </p>
                <p>
                  <img
                    src="/elsalt/elsalt/main_banner3.jpg"
                    alt=""
                    width={
                      matches4
                        ? "100%"
                        : matches2
                        ? "80%"
                        : matches
                        ? "100%"
                        : "60%"
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .linkcontainer {
          display:flex;
          align-items: center;
          flex-direction:column;
          gap: 10px;
        }
        .linkbox {
          display:flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgb(0,0,0,0.3);
          padding: 10px 10px 10px 15px;
          text-align: left;
        }
        .linkbox .bluetext {
          color:#1374b9;
          font-weight: bold;
          font-size: 1.1rem;

        }
      `}</style>
    </section>
  );
}
