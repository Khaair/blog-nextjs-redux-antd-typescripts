import { Col, Modal, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../layouts";
import Post from "./post";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [getSingleUserData, setSingleUserData] = useState<any>("");

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
  const userId = JSON.parse(localStorage.getItem("userId") as string);

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

  return (
    <>
      <Layout>
        <div className="deshboard-area">
          <div className="container">
            <Row>
              <Col span={18}>
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
            <Row>
              <Col span={24}>
                <td>
                  <button
                    onClick={handleClearLocalStorage}
                    className="btn btn-primary"
                  >
                    Logout
                  </button>
                </td>
              </Col>
            </Row>
            <Modal
              title="Create a new post"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <Post />
            </Modal>
          </div>
        </div>
      </Layout>
    </>
  );
}
