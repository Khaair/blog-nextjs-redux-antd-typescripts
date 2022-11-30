import { Col, Row } from "antd";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "./nav";
import PostCard from "./postCard";

import Layout from "../layouts/index";
import About from "./about";

export default function Home() {
  // const [data, setData] = useState<any>("");
  // const [mergedata, setMergedata] = useState<any>("");

  // console.log(data, "data  is here");

  // const fetchpost = async () => {
  //   try {
  //     const dataa = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/?_limit=20"
  //     );
  //     setData(dataa?.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchpost();
  // }, []);

  return (
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <PostCard />
          </Col>
        </Row>
      </Layout>
    </>
  );
}
