import React from "react";
import { Image, Row, Col } from "react-bootstrap";

const SettingsTopRow = ({ image, title, subtitle }) => {
  return (
    <Row style={{ marginTop: "50px" }}>
      <Col sm={1} xs={1} md={1} lg={2}></Col>
      {image && (
        <Image
          src={image}
          className="ml-3"
          style={{ height: "50px", width: "50px" }}
          roundedCircle
        />
      )}
      <Col>
        <h4 className="mb-0" style={{ color: "lightgrey", fontWeight: "600" }}>
          {title}
        </h4>
        {subtitle && <p style={{ color: "grey" }}>{subtitle}</p>}
      </Col>
    </Row>
  );
};

export default SettingsTopRow;
