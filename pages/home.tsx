import { Col, Row } from "antd";
import React from "react";
export default function Home() {
  return (
    <>
      <Row className="mt-5 text-center">
        <Col span={24}>
          <h1 className="blog-head-title">BD News Portal</h1>
          <p>
            In other words, the digital journal. Maybe you want to document life
            as a mother, your fashion sense, your adventures as your travel, or
            just life in general, blogging is one of the easiest ways to get
            your thoughts out there to the masses. (Of course you can always
            blog privately if you’d rather just document your life for your own
            personal reflection.) I love seeing how many people are finally
            exploring the world of blogging and the community of inspiring and
            talented individuals that populate it. However, it’s become a larger
            discussion on whether it’s okay to document your kids on such
            platforms since they can’t really give consent as babies, but
            personally if I could go back and read a blog by my own mother as a
            young mom that would be the most beautiful and priceless gift. And
            one of the best things about blogging is there is no limit on how
            long or what you can document. It will be interesting to see if this
            generation will still be blogging, in whatever form that takes on,
            in the next 50 years.
          </p>
        </Col>
      </Row>
    </>
  );
}
