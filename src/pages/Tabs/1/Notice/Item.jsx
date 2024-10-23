import React, { useEffect } from "react";
import { posts } from "../../../../utils/notice_data.json";
import { useParams } from "react-router-dom";
export default function Item() {
  const { id } = useParams();
  const post = posts.filter((post) => post.id === parseInt(id, 10))[0];
  // console.log(post);
  return (
    <div className="inner sub_inner">
      <div className="notice_wrap">
        <div id="bo_v" className="bo_v">
          <div className="bo_hd">
            <h2 className="bo_v_title">
              <span className="bo_subj">{post.title}</span>
            </h2>
            <div className="bo_v_info">
              <ul>
                <li>
                  <strong>작성자&nbsp;</strong>
                  최고관리자
                </li>
                <li>
                  <strong>작성일&nbsp;</strong>
                  {post.date}
                </li>
                <li>
                  <strong>조회수&nbsp;</strong>
                  100
                </li>
              </ul>
            </div>
          </div>
          <div className="bo_view_area">
            <section className="bo_v_atc" id="bo_v_atc">
              <div className="bo_v_con">
                {post.imgs &&
                  post.imgs.map((img, i) => (
                    <p key={"res_img" + i}>
                      <span>
                        <iframe
                          src={img[0]}
                          alt="res_img"
                          style={{ aspectRatio: img[1] }}
                        ></iframe>
                      </span>
                    </p>
                  ))}
                {post.text && post.text.map((text, i) => <p key={i}>{text}</p>)}
              </div>
            </section>
          </div>
        </div>
        <div className="bo_bot">
          <div className="bo_v_nb">
            <a
              href={
                parseInt(id, 10) < 22
                  ? ""
                  : "/elsalt/notice/" + parseInt(id, 10)
              }
              className="btn_href btn_nxt"
            >
              다음글
            </a>
          </div>
          <a href="/elsalt/notice" className="btn_href btn_list">
            목록
          </a>
        </div>
      </div>
    </div>
  );
}
