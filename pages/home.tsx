import { Col, Row } from "antd";
import React from "react";
import SearchBar from "./searchBar";
export default function Home() {
  return (
    <>
      <Row className="text-center">
        <Col span={24}>
          <div>
            <SearchBar />
          </div>
        </Col>
      </Row>
    </>
  );
}
