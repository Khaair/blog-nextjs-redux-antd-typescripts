import { Avatar, Col, Modal, Row, Skeleton } from "antd";
import { connect } from "react-redux";
import { fetchComments } from "../state-management/actions/comments";
import { fetchUsers } from "../state-management/actions/users";
import { fetchPosts } from "../state-management/actions/posts";
import { DeleteOutlined, CommentOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Home from "./home";
import axios from "axios";
function PostCard({
  posts,
  postsInfo,
  comments,
  commentInfo,
  users,
  userInfo,
}: any) {
  const { Meta } = Card;

  const [getPost, setPosts] = useState<any>([]);
  const [getPhoto, setPhoto] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [getUser, setUsers] = useState<any>([]);

  const [singlePostId, setSinglePostId] = useState<any>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleOk = () => {
  //   setIsModalOpen(false);
  //   alert("After clicking ok delete api will call");
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // dispatch post and comments
  useEffect(() => {
    posts();
    comments();
    users();
    fetchPhotos();
  }, [posts, comments, users]);

  //  get comment filter
  useEffect(() => {
    const posts = postsInfo?.postsData?.map((post: any) => {
      return {
        ...post,
        comments: commentInfo?.commentData?.filter(
          (comment: any) => post?._id === comment?.postId
        ),
        users: userInfo?.usersData?.filter(
          (user: any) => post?.userId === user?._id
        ),

        photos: getPhoto?.filter((photo: any) => post?.id === photo?.id),
      };
    });
    setPosts(posts);
  }, [
    commentInfo?.commentData,
    getPhoto,
    postsInfo?.postsData,
    userInfo?.usersData,
  ]);

  const fetchPhotos = async () => {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=20",
        {
          method: "GET",
        }
      );
      let json = await response.json();
      setPhoto(json);
      return json;
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="post-card-area">
      <div className="container">
        <Row className="mt-5">
          <Col span={24}>
            <Home />
          </Col>
        </Row>

        <Row gutter={16} className="mt-5 ">
          {postsInfo?.loading ? (
            <Col span={24}>
              <div className="dna-wrapper-area">
                <Skeleton active />
              </div>
            </Col>
          ) : (
            getPost?.slice(0, 25)?.map((item: any, index: any) => {
              return (
                <Col className="text-center" span={24} lg={24} key={index}>
                  <div className="container">
                    <Card
                      style={{ marginBottom: "20px" }}
                      cover={
                        // <Image
                        //   alt="example"
                        //   src="https://dgerma-s3access.s3.amazonaws.com/public/products/variants/p5La4Zmxi-red-and-light-blue-fabric-with-large-folds.jpg"
                        // />
                        <Link href={`/posts/${item?._id}`}>
                          <h2
                            className="container text-left"
                            style={{ paddingTop: "20px" }}
                          >
                            {" "}
                            {item?.title}
                          </h2>
                        </Link>
                      }
                    >
                      <Meta
                        avatar={<Avatar src={item?.photos[0]?.url} />}
                        title={item?.users[0]?.username}
                        description={item?.body}
                        style={{ textAlign: "left" }}
                      />

                      <Link href={`/posts/${item?._id}`}>
                        <span
                          style={{
                            fontSize: "17px",
                            color: "orange",
                          }}
                        >
                          {item?.comments?.length}
                        </span>{" "}
                        <CommentOutlined
                          key="comment"
                          style={{
                            fontSize: "19px",
                            color: "green",
                          }}
                        />
                      </Link>
                    </Card>
                  </div>
                </Col>
              );
            })
          )}
        </Row>
      </div>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
