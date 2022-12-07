import React, { useState } from "react";
import Link from "next/link";
import { Image, Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import Signup from "../../pages/signup";
import Admin from "../../pages/login";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpensignup, setIsModalOpensignup] = useState(false);

  const showModallogin = () => {
    setIsModalOpen(true);
  };

  const handleOklogin = () => {
    setIsModalOpen(false);
    alert("After clicking ok delete api will call");
  };

  const handleCancellogin = () => {
    setIsModalOpen(false);
  };

  const showModalsignup = () => {
    setIsModalOpensignup(true);
  };
  const handleOksignup = () => {
    setIsModalOpensignup(false);
    alert("After clicking ok delete api will call");
  };
  const handleCancelsignup = () => {
    setIsModalOpensignup(false);
  };
  return (
    <>
      <div className="menubar-area  bg-white  sticky-top navbar-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="menubar-logo">
                <Link href="/">
                  <img
                    src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="menubar-content">
                <ul>
                  <Link href="/">
                    <li>Home</li>
                  </Link>

                  <li role="button" onClick={showModallogin}>
                    Log in
                  </li>

                  <li role="button" onClick={showModalsignup}>
                    Sign up
                  </li>
                  <Link href="/profile">
                    <li role="button">Profile</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Log in here"
        open={isModalOpen}
        onOk={handleOklogin}
        onCancel={handleCancellogin}
        footer={null}
      >
        <Admin />
      </Modal>

      <Modal
        title="Signup here"
        open={isModalOpensignup}
        onOk={handleOksignup}
        onCancel={handleCancelsignup}
        footer={null}
      >
        <Signup />
      </Modal>
    </>
  );
}
