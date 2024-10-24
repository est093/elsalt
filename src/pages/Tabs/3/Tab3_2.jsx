import "../../../css/etc.css";
export default function Tab3_2() {
  return (
    <div className="container">
      <h4 className="general_font">국민건강보험공단 종합검진 소개</h4>
      <div className="pad-bg light-bg-blue mt-3">
        질병의 조기발견과 조기치료로 국민의 의료비 부담을 줄이며, 사전의
        질병예방으로 국민의 건강수준의 향상에 힘쓰고 여러분의 건강을 지키는
        파수꾼이 될 것을 약속드립니다.
        <br />
        빛과소금내과는 국민건강보험공단에 공식지정된 병원으로써 쾌적한 환경,
        넓은 시설, 최신 의료기기로 보다 세밀하고 정확하게 진료할 것입니다.
      </div>

      <div className="mt-5">
        <h5 className="mb-4">
          <span className="bluebg">검진 대상</span>&emsp;(2022년 기준)
        </h5>
        <h5 className="general_font">
          1. 일반건강검진(의료급여생애전환기 검진 포함)
        </h5>
        <div className="mb-3">
          <div className="mb-3">
            <span className="no_h5">가. 일반건강검진</span>
            <br />
            건강보험가입자와 의료급여수급권자 중 아래기준에 해당하는 자
          </div>
          <div>
            <table className="table_s">
              <thead>
                <tr>
                  <th colSpan="2">구분</th>
                  <th>대상기준</th>
                  <th>실시주기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2">계</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowSpan="4" className="center-text">
                    건<br />
                    강<br />
                    보<br />
                    험<br />
                    가<br />
                    입<br />자
                  </th>
                  <td className="center-text">소계</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="center-text">
                    지역
                    <br />
                    가입자
                  </td>
                  <td>세대주로 20세 이상 세대원 중 격년제로 실시</td>
                  <td>2년 / 1회</td>
                </tr>
                <tr>
                  <td className="center-text">피부양자</td>
                  <td>20세 이상 피부양자 중 격년제로 실시</td>
                  <td>2년 / 1회</td>
                </tr>
                <tr>
                  <td className="center-text">직장 가입자</td>
                  <td>20세 이상 피부양자 중 격년제로 실시</td>
                  <td>2년 / 1회</td>
                </tr>
                <tr>
                  <th colSpan="2">의료급여수급권자</th>
                  <td>20세~64세 의료급여수급권자</td>
                  <td>2년 / 1회</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <span className="no_h5">나. 의료급여생애전환기검진</span>
            <br />
            66세 이상 짝수년도 출생자로 의료급여 수급권자에 해당하는 자
          </div>
          <div>
            <table className="table_s">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>대상기준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>의료급여수급권자</th>
                  <td className="center-text">66세</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
