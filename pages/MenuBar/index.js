import React from "react";
import Link from "next/link";

export default function MenuBar({ data }) {
  console.log(data?.company_info?.logo, "logo data menubar");
  const imagefetch = data?.company_info?.logo;
  const link = `https://www.nicepng.com/png/detail/232-2326770_icon-blogger-logo-now-creative-group-logo.png`;
  return (
    <>
      <div className="menubar-area  sticky-top navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="menubar-logo">
                <Link href="/">
                  <img src={link} alt="Praman india logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="menubar-content">
                <ul>
                  <Link href="/">
                    <li>HOME</li>
                  </Link>
                  <Link href="/services">
                    <li>SERVICES</li>
                  </Link>
                  <Link href="/contactus">
                    <li>CONTACT US</li>
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
