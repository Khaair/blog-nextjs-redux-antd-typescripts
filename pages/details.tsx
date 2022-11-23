import { Col, Image, Row } from "antd";
import React from "react";

export default function details() {
  return (
    <div className="details-page-area">
      <div className="container">
        <Row>
          <Col span={18}>
            <div className="details-page-left-side-wrapper">
              <div className="container">
                <div className="post-details">
                  <h3 className="">
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Vivam
                  </h3>
                  <div className="blog-post-img mt-3">
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
                  </div>
                  <div className="post-content">
                    <div className="post-description mt-3">
                      <p>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Vivamus magna justo, lacinia eget consectetur
                        sed, convallis at tellus. Sed porttitor lectus
                        nibh.Curabitur non nulla sit amet nisl tempus convallis
                        quis ac lectus. Vivamus magna justo, lacinia eget
                        consectetur sed, convallis at tellus. Sed porttitor
                        lectus nibh.Curabitur non nulla sit amet nisl tempus
                        convallis quis ac lectus.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="details-page-right-side-wrapper">
              <div className="container">
                <div className="post-details">
                  <h3 className="">Latest Post</h3>

                  <h3 className="">
                    <b>Curabitur non nulla sit</b>
                  </h3>
                  <div className="blog-post-img">
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
                  </div>
                  <div className="post-content">
                    <div className="post-description mt-3">
                      <p>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
