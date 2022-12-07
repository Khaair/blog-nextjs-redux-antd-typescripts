import { Col, Image, Row } from "antd";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../layouts/index";
import { connect } from "react-redux";
import { fetchComments } from "../../state-management/actions/comments";
import { fetchUsers } from "../../state-management/actions/users";

import { fetchPosts } from "../../state-management/actions/posts";
import Link from "next/link";
import { log } from "console";
function Details({
  posts,
  postsInfo,
  comments,
  commentInfo,
  users,
  userInfo,
}: any) {
  const router = useRouter();

  const { id } = router.query;
  console.log(id, "pooooo idd");
  const [singlePostInfo, setSinglePostInfo] = useState<any>(undefined);
  const [getPost, setPosts] = useState([]);
  console.log(postsInfo, "postsInfo here haha");

  // dispatch post and comments
  useEffect(() => {
    posts();
    comments();
  }, [posts, comments]);
  useEffect(() => {
    const getPosts = postsInfo?.postsData?.map((post: any) => {
      return {
        ...post,
        comments: commentInfo?.commentData?.filter(
          (comment: any) => comment?.postId === id
        ),
        users: userInfo?.usersData?.filter(
          (user: any) => post?.userId === user?._id
        ),
      };
    });
    setPosts(getPosts);
    console.log(getPosts, "getPosts here");
    const singlePosts = postsInfo?.postsData?.find((post: any) => {
      console.log(post?._id, "post id");
      console.log(id, "post id query");

      if (post?._id === id) {
        return {
          ...post,
        };
      }
    });
    console.log(singlePosts, "singlePosts yoyo");
    setSinglePostInfo(singlePosts);
  }, [
    commentInfo?.commentData,
    id,
    postsInfo?.postsData,
    setSinglePostInfo,
    userInfo?.usersData,
  ]);

  return (
    <Layout>
      <div className="details-page-area">
        <div className="container">
          <Row>
            <Col span={18}>
              <div className="details-page-left-side-wrapper">
                <div className="container">
                  <div className="post-details">
                    <h3>{singlePostInfo?.title}</h3>
                    <h5 style={{ paddingTop: "10px", color: "gray" }}>
                      {/* {singlePostInfo?.users[0]?.name} */}
                    </h5>

                    <p>{singlePostInfo?.body}</p>
                    {/* <div className="blog-post-img mt-3">
                      <Image
                        src="https://dgerma-s3access.s3.amazonaws.com/public/blogs/3IhEJ6uDF0-clear-filter--2-.png"
                        alt=""
                      />
                      <div className="date">
                        <span>
                          <i className="fa fa-clock" />
                          November 22nd 2022
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div>
                  <div className="container">
                    <h4 style={{ color: "gray", paddingTop: "30px" }}>
                      Comment:
                    </h4>
                  </div>
                </div>
                <div>
                  {singlePostInfo?.comments?.map((item: any, index: any) => {
                    return (
                      <>
                        <div className="container">
                          <div style={{ paddingTop: "30px" }} key={index}>
                            <h5 style={{ color: "gray" }}>{item?.name}</h5>
                            <p>{item?.body}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="details-page-right-side-wrapper">
                <div className="container">
                  <div className="post-details">
                    <h3 className="">Latest Post</h3>
                    <hr />

                    {getPost?.splice(0, 3)?.map((post: any) => (
                      <div className="sidebar-single-post" key={post?._id}>
                        <Link href={`/posts/${post?._id}`}>
                          {" "}
                          <h4>{post?.title}</h4>
                        </Link>
                        <p>{post?.body}</p>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state: { posts: any; comments: any; users: any }) => {
  return {
    postsInfo: state?.posts,
    commentInfo: state?.comments,
    userInfo: state?.users,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    posts: () => dispatch(fetchPosts()),
    comments: () => dispatch(fetchComments()),
    users: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
