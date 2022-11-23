import { Col, Image, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./Components/Services/Actions/todosAction";

import { Dna } from "react-loader-spinner";
export default function PostCard({ postdata }: any) {
  const { isLoading, todos, error }: any = useSelector((state) => state);

  console.log(isLoading);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  // const [comment, setComment] = useState<any>();
  // console.log(comment, "comment");
  // const [gfgf, dfgdfgfdg] = useState<any>();
  // useEffect(() => {
  //   if (comment) {
  //     const myarr = postdata.map((item: any) => {
  //       return {
  //         ...item,
  //         comments: comment.filter(
  //           (comment: any) => comment.postId === item.id
  //         ),
  //       };
  //     });
  //     console.log("myarr", myarr);
  //     dfgdfgfdg(myarr);
  //   }
  // }, [comment, postdata]);
  return (
    <div className="post-card-area mt-5 ">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="text-center">
              {error && <h3>{error.message}</h3>}
              {isLoading && (
                <Dna
                  visible={true}
                  height="300"
                  width="200"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              )}
            </div>
            <Row className="mt-5 ">
              {todos &&
                todos?.map((item: any, index: any) => {
                  return (
                    <Col className="text-center" span={8} key={index}>
                      <div>
                        <div className="card mb-5">
                          <Image
                            src="https://dgerma-s3access.s3.amazonaws.com/public/products/variants/p5La4Zmxi-red-and-light-blue-fabric-with-large-folds.jpg"
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                          <div className="text-center mt-3">
                            <Link href="/details">
                              <h4>
                                <b>{item.title}</b>
                              </h4>
                            </Link>

                            <p>Architect &amp; Engineer</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
