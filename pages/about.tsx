import React from "react";
import { Col, Row } from "antd";
import Nav from "./nav";
import Layout from "../layouts/index";

export default function About() {
  return (
    <Layout>
      <div className="about-area">
        <div className="container">
          <Row className="bg-primary mt-5">
            <Col span={24}>col</Col>
          </Row>
          <Row>
            <Col className="bg-danger" span={12}>
              col-12
            </Col>
            <Col className="bg-success" span={12}>
              col-12
            </Col>
          </Row>
          <Row>
            <Col className="bg-warning" span={8}>
              col-8
            </Col>
            <Col className="bg-secondary" span={8}>
              col-8
            </Col>
            <Col className="bg-warning" span={8}>
              col-8
            </Col>
          </Row>
          <Row>
            <Col className="bg-danger" span={6}>
              col-6
            </Col>
            <Col className="bg-success" span={6}>
              col-6
            </Col>
            <Col className="bg-danger" span={6}>
              col-6
            </Col>
            <Col className="bg-success" span={6}>
              col-6
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}
