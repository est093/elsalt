import React, { useEffect } from "react";
import { posts } from "../../../../utils/notice_data.json";
import { useParams } from "react-router-dom";
export default function Item() {
  const { id } = useParams();
  const post = posts.filter((post) => post.id === parseInt(id, 10))[0];
  console.log(post);
  return <div>Item</div>;
}
