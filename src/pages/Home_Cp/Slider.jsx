import { useEffect, useState } from "react";

const SliderComponent = () => {
  const [matches3, setMatches3] = useState(
    window.matchMedia("(min-width: 990px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 990px)")
      .addEventListener("change", (e) => setMatches3(e.matches));
  }, []);
  return (
    <div className="home-hero-section mb-0">
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
        <div className="hero-slider-mask w-slider-mask ">
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
          <div className="hero-slide w-slide">
            <img
              src={matches3 ? "/elsalt/elsalt/2.jpg" : "/elsalt/elsalt/1.jpg"}
              loading="lazy"
              alt="Slider image"
              className={matches3 ? "slider-image" : "slider-image-sm"}
            />
          </div>

          <div className="hero-slide w-slide">
            <img
              src="/elsalt/elsalt/main_banner2.jpg"
              loading="lazy"
              alt="Slider image"
              className={matches3 ? "slider-image" : "slider-image-sm"}
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
        }
        br {
          display: block;
          margin: 10px 0;
        }
        .video-container {
          position: relative;
          width: 100%;
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
      `}</style>
    </div>
  );
};

export default SliderComponent;
