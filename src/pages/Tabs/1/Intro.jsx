import React, { useEffect, useState } from "react";

export default function Intro() {
  return (
    <>
      <div className="container">
        <h4 style={{ color: "#1374b9", fontWeight: "bold" }}>원장님 인사말</h4>
        <br />
        <div className="row col-mb-50 mb-3">
          <div className="col-lg-2">
            <img src="/elsalt/elsalt/1_1_1.jpg" alt="인물사진" width="100%" />
          </div>
          <div className="col-lg-6">
            <h4 style={{ color: "#1374b9", fontWeight: "bold" }}>
              안녕하십니까?
            </h4>
            하나님의 사랑과 은혜아래 항상 건강과 축복이 넘치기를 기도드립니다.{" "}
            <br />
            다년간의 임상경험과 지식을 바탕으로 최첨단 의료 설비를 갖춘 내과
            전문 클리닉, 류마티스 센터, 종합검진센터를 개원하게 되었습니다.
            <br />
            『빛과소금내과』는 질병으로 고통받는 환자들에게 최선의 진료를 통해
            빛을 비추어 줌으로 소망을 갖게하고, 이 세상 속에서 정직한 진료,
            성실한 진료를 통해 소금의 역할을 할 수 있는 병원으로 섬기겠습니다.{" "}
            <br />
            <br />
            <p style={{ textAlign: "right" }}>원장/내과 전문의 김 우 규</p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <div className="container">
        <h4 style={{ color: "#1374b9", fontWeight: "bold" }}>
          빛과소금내과 원장
        </h4>
        <h5 style={{ fontWeight: "bold" }}>
          내과 전문의
          <br />
          대한 류마티스내과 분과 전문의
        </h5>
        <br />
        <ul style={{ paddingLeft: "4px" }}>
          <li className="li_bold">
            서울대학교병원 류마티스내과 분과전문의 수료
          </li>
          <li className="li_bold">서울대학교병원 내과 자문의</li>
          <li className="li_bold">
            카톨릭대학교 의과대학(은평성모병원) 내과 외래교수
          </li>
          <li className="li_bold">한림대학교 의과대학교 내과 외래교수</li>
          <br />
          <li>
            한국초음파학회 초음파 교육인증의 및 인증의
            <br />
            (상복부,하복부,비뇨기,갑상선,두경부,근골격,말초혈관,유방초음파)
          </li>
          <li>대한 내과학회 내과전공의 초음파교육 지도인증의</li>
          <li>대한 류마티스학회 근골격초음파 인증의</li>
          <li>대한임상초음파학회 교육인증의 및 인증의</li>
          <li>위내시경 전문의 인정의</li>
          <li>대장내시경 전문의 인정의</li>
          <li>대한 내과학회 정회원</li>
          <li>대한 류마티스학회 정회원</li>
          <li>미국 류마티스학회(ACR) 정회원</li>
        </ul>
        <br />
        <h5>
          <span className="bluebg">대외활동</span>
        </h5>
        <ul style={{ padding: "5px 0px 0px 4px" }}>
          <li>고양시 내과 의사회 회장(現)</li>
          <li>고양시 의사회 학술 이사(現)</li>
          <li>경기도 내과 의사회 부회장(現)</li>
          <li>대한 내과 의사회 부회장 역임</li>
          <li>대한의사협회 중앙비례 대의원(現)</li>
          <li>한국초음파학회 창립 및 2대 회장 역임</li>
          <li>한국초음파학회 고문(現)</li>
          <li>대한 내과학회 평의원(現)</li>
        </ul>
        <br />
        <h5>
          <span className="bluebg">수상경력</span>
        </h5>
        <ul style={{ padding: "5px 0px 0px 4px" }}>
          <li>보령의료봉사상(2019년)</li>
          <li>고양시장 표창장(2005년, 2008년, 2015년)</li>
          <li>대한개원내과의사회 회장 공로패(2017년)</li>
        </ul>
        <br />
        <h5>
          <span className="bluebg">저서(역서)</span>
        </h5>
        <div className="row col-mb-10 mb-3">
          <div className="col-lg-3">
            <img src="/elsalt/elsalt/1_1_2.jpg" alt="" />
            <p className="book_intro">
              근골격 초음파(류마티스질환편) <br />
              (Musculoskeletal Ultrasound)
            </p>
          </div>
          <div className="col-lg-3">
            <img src="/elsalt/elsalt/1_1_3.jpg" alt="" />
            <p className="book_intro">
              갑상선 초음파
              <br /> (Thyroid Ultrasound)
            </p>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <h5>
          <span className="bluebg">협력 병원</span>
        </h5>
        <ul style={{ padding: "5px 0px 0px 4px" }}>
          <li>서울대학교병원 내과 자문의 및 협력병원 내과 전문의</li>
          <li>일산병원 협력병원 및 개방병원 내과 전문의</li>
          <li>일산백병원 협력병원 내과 전문의</li>
          <li>동국대학교병원 협력병원 내과 전문의</li>
          <li>연세대학교병원 협력병원 내과 전문의</li>
          <li>서울아산병원 협력병원 내과 전문의</li>
          <li>카톨릭대학교 서울성모병원 협력병원 내과 전문의</li>
          <li>고려대학교 안암병원 협력병원 내과 전문의</li>
          <li>중앙대학교 병원 협력병원 내과 전문의</li>
          <li>한림대학교 의과대학교 내과 외래 교수</li>
          <li>한림대학교 성심병원 협력병원 내과 전문의</li>
          <li>관동대학교 의과대학교 외래 교수역임</li>
          <li>카톨릭대학교 의과대학(은평성모병원) 외래 교수</li>
          <li>백마 초등학교 및 냉천 초등학교 촉탁 의사</li>
          <li>한국 국제 기독학교 촉탁 의사</li>
        </ul>
      </div>
      <style>{`
        li {
          list-style: circle;
        }

        .li_bold {
          font-weight: bold;
        }
        .bluebg {
          background-color: #1374b9;
          border-radius: 10px;
          color:white !important;
          padding: 3px 10px 3px 10px;
        }
        .book_intro {
          text-align: center;
          font-size: var(--bs-body-font-size);
        }
        @media only screen and (max-width: 992px) and (min-width: 350px)   {
          .book_intro {          
            text-align: left;
            padding-left: 50px;
          }
        }
      `}</style>
    </>
  );
}
