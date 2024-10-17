import { useEffect, useState } from "react";

const SliderComponent = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 355px)").matches
  );

  const [matches2, setMatches2] = useState(
    window.matchMedia("(min-width: 650px)").matches
  );
  const [matches3, setMatches3] = useState(
    window.matchMedia("(min-width: 990px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 571px)") //571px
      .addEventListener("change", (e) => setMatches(e.matches));
    window
      .matchMedia("(min-width: 650px)")
      .addEventListener("change", (e) => setMatches2(e.matches));
    window
      .matchMedia("(min-width: 990px)")
      .addEventListener("change", (e) => setMatches3(e.matches));
  }, []);
  return (
    <section className="home-hero-section wf-section">
      <div
        data-delay="5000"
        data-animation="cross"
        className="hero-slider w-slider"
        data-autoplay="true"
        data-easing="ease"
        data-hide-arrows="false"
        data-disable-swipe="false"
        data-autoplay-limit="0"
        data-nav-spacing="6"
        data-duration="1000"
        data-infinite="true"
      >
        <div className="hero-slider-mask w-slider-mask">
          <div className="hero-slide w-slide">
            <div
              className="video-big-container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="video-container">
                <video src="/elsalt/mv_video.mp4" autoPlay loop muted></video>
              </div>
            </div>
          </div>
          <div
            className="hero-slide w-slide"
            style={
              matches2
                ? {
                    backgroundColor: "rgba(19, 116, 185, 0.8)",
                  }
                : {
                    backgroundColor: "rgba(19, 116, 185, 0.8)",

                    height: "270px",
                  }
            }
            // style = {matches2 ?
            //   ( matches_2? {
            //   backgroundColor: "rgba(19, 116, 185)", color:"white" paddingTop: '15%',
            // }:
            // ({
            //   backgroundColor: "rgba(19, 116, 185)", color:"white" paddingTop: '15%',
            // }: {
            //   backgroundColor: "rgba(19, 116, 185)", color:"white" height: "300px"
            // })
          >
            <div className="main-container w-container">
              <div
                className="hero-slider-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontWeight: "bold",
                    padding: "10px",
                    lineHeight: "30px",
                    textAlign: "center",
                    fontFamily: "arita-dotum-md",
                  }}
                  className="page-title font-color-white"
                >
                  너희는 세상의 소금이니 소금이 만일 그 맛을 잃으면 무엇으로
                  짜게 하리요
                  {matches ? <br /> : " "}후에는 아무 쓸 데 없어 다만 밖에
                  버려져 사람에게 밟힐 뿐이니라
                  {matches ? <br /> : " "}너희는 세상의 빛이라 산 위에 있는
                  동네가 숨겨지지 못할 것이요
                  {matches ? <br /> : " "}사람이 등불을 켜서 말 아래에 두지
                  아니하고 등경 위에 두나니
                  {matches ? <br /> : " "}이러므로 집 안 모든 사람에게
                  비치느니라
                  {matches ? <br /> : " "}이같이 너희 빛이 사람 앞에 비치게 하여
                  그들로 너희 착한 행실을 보고
                  {matches ? <br /> : " "}하늘에 계신 너희 아버지께 영광을
                  돌리게 하라
                  <br />
                  마태복음 5:13-16
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide w-slide">
            <img
              src="/elsalt/elsalt/main_banner2.jpg"
              loading="lazy"
              alt="Slider image"
              width={matches3 ? "" : "100%"}
              className={matches3 ? "slider-image" : ""}
            />
          </div>
        </div>
        <div className="left-arrow w-slider-arrow-left">
          <div className="arrow-embed w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="black"
            >
              <g opacity="1" clipPath="url(#clip0_3024_968)">
                <path
                  d="M6.52268 9.16689L10.9927 4.69689L9.81435 3.51855L3.33268 10.0002L9.81435 16.4819L10.9927 15.3036L6.52268 10.8336H16.666V9.16689H6.52268Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="right-arrow w-slider-arrow-right">
          <div className="arrow-embed w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="black"
            >
              <path
                d="M13.4773 9.16689L9.00732 4.69689L10.1857 3.51855L16.6673 10.0002L10.1857 16.4819L9.00732 15.3036L13.4773 10.8336H3.33398V9.16689H13.4773Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="slide-nav w-slider-nav w-shadow w-round"></div>
      </div>
      <style>{`
        .h1 {
          font-size: 25px;
          font-weight: bold;
        }
        .h1:not(:first-child) {
          margin-top: -20px;
        }
        .page-title,
        .first-slider-text,
        .upper {
          font-size: 20px !important;
        }
        @media screen and (min-width: 664px) {
          .h1 {
            line-height: 70px;
          }
        }
        @media screen and (max-width: 664px) {
          .h1 {
            font-size: 19px;
            line-height: 50px;
          }
          .h1:not(:first-child) {
            margin-top: -10px;
          }
          .page-title,
          .first-slider-text,
          .upper {
            font-size: 15px !important;
          }
        }
        @media screen and (max-width: 370px) {
          .h1 {
            font-size: 17px !important;
          }
        }
        @media screen and (max-width: 334px) {
          .h1 {
            font-size: 17px;
            line-height: 35px !important;
          }
          .h1:not(:first-child) {
            margin-top: 0px;
          }
          .first-slider-text,
          .upper {
            font-size: 15px !important;
          }
        }
        br {
          display: block;
          margin: 10px 0;
        }
        .video-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 35%; /* 16:9 비율, 필요에 맞게 조정 가능 */
          overflow: hidden;
        }

        .video-container video {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100vw; /* 전체 가로폭 */
            height: auto; /* 높이는 자동 조정 */
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
        @media screen and (min-width: 992px) {
          .video-container {
            height: 150%;
            overflow: hidden;
          }
          .video-big-container {
            height: 100%;
            margin-bottom: -100px;
          }
        }
        @media screen and (max-width: 590px) {
          .hero-slider-mask {
            height: 70%;
          }
          .page-title {
            font-size: 12px !important;
            line-height: 24px !important;
          }
          .main-container {
            padding: 5px;
          }
        }
        @media only screen and (max-width: 255px)   {
          .page-title {
            font-size: 10px !important;
            line-height: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SliderComponent;
