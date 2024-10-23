import React from "react";
import "../../../css/fixcss.css";
import { posts as items } from "../../../utils/notice_data.json";
export default function Notice() {
  let posts = items.sort((a, b) => a.id - b.id).reverse();
  posts = posts.sort((a, b) => (b.top === true) - (a.top === true)); // top true는 나중일수록 위에 올라감.
  return (
    <div className="notice_wrap">
      <div className="bd_list">
        {posts.map((post, index) => (
          <a key={index} href={"/elsalt/notice/" + post.id} className="bd_item">
            <div className="bd_num">
              <b
                className={
                  post.top
                    ? "notice_icon notice_icon_fix"
                    : "notice_icon notice_icon_no_fix"
                }
              >
                자료{post.top && " ★"}
              </b>
            </div>
            <div className="bd_subject">
              <b>
                <span
                  className={
                    post.top
                      ? "m_view notice_icon notice_icon_fix"
                      : "m_view notice_icon notice_icon_no_fix"
                  }
                >
                  자료{post.top && " ★"}
                </span>
                {post.title}
              </b>
              <ul className="m_view m_info">
                <li>최고관리자</li>
                <li>{post.date}</li>
              </ul>
            </div>
            <div className="bd_name">최고관리자</div>
            <div className="bd_name">{post.date}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
