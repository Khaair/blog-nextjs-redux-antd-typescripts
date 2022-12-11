import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Modal, Row } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../layouts";
import Post from "./post";
import { fetchComments } from "../state-management/actions/comments";
import { fetchUsers } from "../state-management/actions/users";
import { fetchPosts } from "../state-management/actions/posts";
function Profile({
  posts,
  postsInfo,
  comments,
  commentInfo,
  users,
  userInfo,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);

  const [getSingleUserData, setSingleUserData] = useState<any>("");
  const [getPost, setPosts] = useState<any>([]);
  const [getUsers, setUsers] = useState<any>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notificationMsg, setNotificationMsg] = useState("");
  const [grettingsMsg, setGrettingsMsg] = useState<string>("");
  const [editTitle, setEditTitle] = useState<string>("");
  const [editbody, setEditBody] = useState<string>("");
  const [getPostId, setPostId] = useState<string>("");

  const userId = JSON.parse(localStorage.getItem("userId") as string);

  // dispatch post and comments
  useEffect(() => {
    posts();
    comments();
    users();
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
      };
    });
    setPosts(posts);
  }, [commentInfo?.commentData, postsInfo?.postsData, userInfo?.usersData]);
  useEffect(() => {
    const users = userInfo?.usersData?.map((user: any) => {
      return {
        ...user,

        posts: postsInfo?.postsData?.filter(
          (post: any) => post?.userId === userId
        ),
      };
    });
    setUsers(users);
  }, [
    commentInfo?.commentData,
    postsInfo?.postsData,
    userInfo?.usersData,
    posts,
  ]);

  const router = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    alert("After clicking ok delete api will call");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
    router.push("/");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSingleUser = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8080/api/show-single-user/${userId}`
      );

      console.log(res?.data, "profile");
      setSingleUserData(res?.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchSingleUser();
  }, [userId]);

  const sendDatatoApp = async () => {
    try {
      let x = await axios.post("http://localhost:8080/api/savepost", {
        title,
        body,
        userId,
      });
      console.log(x?.status, "success");
      if (x?.status === 200) {
        handleCancel();
        posts();
      }
    } catch (er) {
      console.log(er);
    }
  };

  const deletepost = async (id: any) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/delete-post/${id}`
      );
      console.log(mydata);

      const filterd = getPost.filter((a: any) => a._id !== id);
      setUsers(filterd);
      posts();
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    var today = new Date();
    var curHr = today.getHours();

    console.log(curHr, "getHours");

    if (curHr < 12) {
      setGrettingsMsg("good morning");
    } else if (curHr < 18) {
      setGrettingsMsg("good afternoon");
    } else {
      setGrettingsMsg("good evening");
    }
  }, [userId]);

  const handleOkEdit = () => {
    setIsModalOpenEdit(false);
    alert("After clicking ok delete api will call");
  };

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };

  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const fetchdata = async (postId: any) => {
    setPostId(postId);
    try {
      const data = await axios.get(
        `http://localhost:8080/api/show-single-post/${postId}`
      );

      console.log(data, "update data here");

      setEditTitle(data.data.title);

      setEditBody(data.data.body);
    } catch (err) {
      console.log(err, "error");
    }

    showModalEdit();
  };

  const upDate = async () => {
    try {
      let ad = await axios.post(
        `http://localhost:8080/api/update-post/${getPostId}`,
        {
          title: editTitle,
          body: editbody,
          userId,
        }
      );
      handleCancelEdit();
      posts();
      console.log(ad);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <Layout>
        <div className="deshboard-area">
          <div className="container">
            <Row>
              <Col span={18}>
                <h3>
                  Hey! {getSingleUserData?.username},{grettingsMsg}
                </h3>
                <form className="form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <table style={{ width: "100%" }}>
                          <tbody>
                            <tr>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  Full Name:
                                </label>
                              </td>
                              <td>
                                {" "}
                                <label className="col-form-label  fw-bold fs-6">
                                  {getSingleUserData?.username}
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  Email:
                                </label>
                              </td>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  {getSingleUserData?.email}&nbsp;
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  Contact Phone:
                                </label>
                              </td>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  01777975237 &nbsp;
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  Address:
                                </label>
                              </td>
                              <td>
                                <label className="col-form-label  fw-bold fs-6">
                                  Mohammadpur,Dhaka
                                </label>
                              </td>
                            </tr>
                            <br></br>
                            <br></br>

                            <tr>
                              <td>
                                <button
                                  onClick={handleClearLocalStorage}
                                  className="btn btn-primary"
                                >
                                  Logout
                                </button>
                              </td>

                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </form>
              </Col>

              <Col span={6}>
                <button onClick={showModal} className="btn btn-primary">
                  Create post
                </button>
              </Col>
            </Row>

            <Modal
              title="Create a new post"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <div className="container">
                <form action="">
                  <div className="form-group mt-3">
                    <label htmlFor="">Enter Title</label>
                    <input
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      style={{ margin: "12px" }}
                      placeholder="Enter title"
                    />
                    <p style={{ color: "red" }}>{notificationMsg}</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Enter Description</label>

                    <textarea
                      className="form-control"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      style={{ margin: "12px" }}
                      placeholder="Enter Description"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    type="button"
                    onClick={sendDatatoApp}
                  >
                    Post
                  </button>
                </form>
              </div>
            </Modal>
            <div className="bottom-section-area mt-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-profile-post-section text-center">
                    <h3>
                      Hey! {getSingleUserData?.username}, your all post here
                    </h3>
                  </div>
                </div>
                {getUsers
                  .slice(0, 1)[0]
                  ?.posts?.map((post: any, index: any) => {
                    return (
                      <div key={index} className="col-lg-12">
                        <div className="card-profile-post-section">
                          <div>
                            <h3>{post?.title}</h3>
                            <p> {getSingleUserData?.username}</p>
                            <p>{post?.body}</p>
                            <DeleteOutlined
                              key="delete"
                              style={{ fontSize: "19px", color: "red" }}
                              onClick={() => deletepost(post?._id)}
                            />
                            <div
                              onClick={() => fetchdata(post?._id)}
                              className="btn btn-primary mx-3"
                            >
                              Edit
                            </div>

                            <Modal
                              title="Edit this post"
                              open={isModalOpenEdit}
                              onOk={handleOkEdit}
                              onCancel={handleCancelEdit}
                              footer={null}
                            >
                              <div className="container">
                                <form action="">
                                  <div className="form-group mt-3">
                                    <label htmlFor="">Enter Title</label>
                                    <input
                                      className="form-control"
                                      value={editTitle}
                                      onChange={(e) =>
                                        setEditTitle(e.target.value)
                                      }
                                      style={{ margin: "12px" }}
                                      placeholder="Enter title"
                                    />
                                    <p style={{ color: "red" }}>
                                      {notificationMsg}
                                    </p>
                                  </div>

                                  <div className="form-group">
                                    <label htmlFor="">Enter Description</label>

                                    <textarea
                                      className="form-control"
                                      value={editbody}
                                      onChange={(e) =>
                                        setEditBody(e.target.value)
                                      }
                                      style={{ margin: "12px" }}
                                      placeholder="Enter Description"
                                    />
                                  </div>
                                  <button
                                    className="btn btn-primary mt-3"
                                    type="button"
                                    onClick={upDate}
                                  >
                                    Update
                                  </button>
                                </form>
                              </div>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
