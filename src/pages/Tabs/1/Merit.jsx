import "../../../css/fixcss.css";
export default function Merit() {
  const content = (title, multiple_content) => {
    return (
      <>
        <h5 style={{ marginTop: "20px" }}>
          <span className="bluebg">{title}</span>
        </h5>
        {multiple_content &&
          multiple_content.map((content, index) => (
            <div key={index}>
              {content}
              <br />
            </div>
          ))}
      </>
    );
  };
  const content_3 = (title, multiple_content, i) => {
    return (
      <>
        <h5 style={{ marginTop: "20px" }}>
          <span className="bluebg">{title}</span>
        </h5>
        {multiple_content &&
          multiple_content.map((content, index) => {
            if (index == i) {
              return (
                <>
                  <strong key={index} style={{ color: "#1374b9" }}>
                    {content}
                  </strong>
                </>
              );
            }
            return <>{content}&nbsp;</>;
          })}
      </>
    );
  };
  const content_2 = (title) => {
    return (
      <>
        <h5 style={{ marginTop: "20px" }}>
          <span className="bluebg">{title}</span>
        </h5>
        <div>
          국민관리공단 일산병원과 개방 협력병원 관계를 체결하여 다른 특별한
          절차없이 신속히 원장님 명의로 입원 및 특수검사(CT,MRI)가 가능하며,
          빛과소금내과 원장님이 직접 주치의가 되어 입원치료(입원중에도 원장님이
          정기적으로 계속 병실회진) 및 퇴원후에도 계속 진료를 받을수 있는{" "}
          <strong style={{ color: "#1374b9" }}>
            미국의 attending staff system
          </strong>
          의 유기적인 진료체계를 확립하였습니다.
          <br />
          (KBS 및 경인방송 뉴스 보도)
        </div>
      </>
    );
  };
  return (
    <div class="container">
      <div className="heading-block">
        <h3 style={{ color: "#1374b9", fontWeight: "bold", marginTop: "20px" }}>
          빛과 소금 내과 종합검진 장점
        </h3>
      </div>
      {content("① 정확한 검사를 위한 최신의 장비", [
        "높은 해상력을 갖춘 초음파진단기(복부, 갑상선, 유방, 심장, 경동맥, 관절 등), 최신 전자내시경(9mm) 및 위내시경 세척기와 소독기, 정밀 체성분 분석기(InBody 3.0), 첨단 골다공증검사기, 심전도기, 폐기능검사기,  x - ray 등  종합병원에 못지않은 최신의 기기를 다양하게 보유하고 있습니다.",
      ])}
      {content("② 친절한 봉사", [
        "하나님의 사랑안에서 형제자매처럼 돌보아드립니다.",
      ])}
      {content("③ 신속, 정밀한 검사", [
        "혈액종합검사실을 자체내에서 운영하여 검사결과를 신속히 알 수 있습니다.",
      ])}
      {content(
        "④ 정확하고 차별화된 종합검진센터 (일원화된 종합검진과 진료체계)",
        [
          "종합병원에서는 경험이 많은 내과전문의가 상담을 하고 직접관리 하지는 않습니다.",
          "저희 빛과소금 검진센터에서는 원장님 이하 내과 전문의가 직접관리하고 상담하여 검사와 진료가 동시에 이루어지는 진료체계를 확립하였습니다. ",
        ]
      )}
      {content_2("⑤ 유기적인 진료체계 확립")}
      {content_3(
        "⑥ 유기적인 후송체계 확립",
        [
          "서울대학교병원 류마티스내과 교수님과의 긴밀한 후송체계가 확립되어 있습니다. 또한 현재",
          "서울대학교병원 내과 자문의",
          "로 위촉되어 있습니다. 국립 암센터, 일산 백병원과도 긴밀한 후송체계가 확립되어 있습니다.",
        ],
        1
      )}
      {content("⑦ 일산 최초의 류마티스내과 전문병원", [
        "일산 및 주위지역에서 최초로 개원한 류마티스내과 전문병원입니다.",
      ])}
      {content_3(
        "⑧ 차별화된 내과 종합전문의원",
        [
          "간단한 질환부터 입원이 필요한 중한 질환까지 다양하게 치료하는",
          "내과 전문병원",
          "으로 지역주민 및 다양한 거리에서 오시는 환자들에게 최선을 다하고 있습니다.",
        ],
        1
      )}
      {content("⑨ 국민건강보험공단 공식지정 병원", [
        "종합건강검진에 필요한 전문인력, 시설 및 장비가 국민건강보험공단에서도 공식지정 될 만큼 검사결과가 정확합니다.",
      ])}
    </div>
  );
}
