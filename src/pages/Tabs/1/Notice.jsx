import React from "react";
import "../../../css/fixednotice.css";
export default function Notice() {
  return (
    <div className="notice_wrap">
      <div className="bd_list">
        <a href="/elsalt/notice/1" className="bd_item">
          <div className="bd_num">
            <b className="notice_icon">공지</b>
          </div>
          <div className="bd_subject">
            <b>
              <span className="m_view notice_icon">공지</span>
              안녕
            </b>
            <ul className="m_view m_info">
              <li>최고관리자</li>
              <li>24-10-18</li>
            </ul>
          </div>
          <div className="bd_name">최고관리자</div>
          <div className="bd_name">24-10-18</div>
        </a>
        <a href="/elsalt/notice/2" className="bd_item">
          hello
        </a>
      </div>
    </div>
  );
}
