import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="menubar-area  bg-white  sticky-top navbar-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="menubar-logo">
                <Link href="/">
                  <img
                    src="https://dgerma-s3access.s3.amazonaws.com/public/users/profile/Kjn9e3bOZ-favicon.png"
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
                  <li>International</li>
                  <li>Politics</li>

                  <Link href="/profile">
                    <li role="button">Profile</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
