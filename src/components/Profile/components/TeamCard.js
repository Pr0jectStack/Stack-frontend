import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./TeamCard.css";

const TeamCard = ({ teamName, workspaceName, role, percentComplete }) => {
  return (
    <>
      <Col lg={6}>
        <Card
          style={{
            width: "101%",
            marginBottom: "5%",
            backgroundColor: "inherit",
            borderWidth: "2px",
            borderColor: "#222128",
          }}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title style={{ color: "#008ecc" }}>{teamName}</Card.Title>
                <Card.Subtitle className="mb-2" style={{ color: "grey" }}>
                  {workspaceName}
                </Card.Subtitle>
                <h6 className="mt-5 mb-0">
                  <Badge
                    pill
                    style={{
                      textAlign: "center",
                      padding: "3%",
                      backgroundColor: "#222030",
                      color: "#008ecc",
                      fontWeight: "500",
                    }}
                  >
                    {role}
                  </Badge>
                </h6>
              </Col>
              {/* <Col>
                <Progress
                  style={{ fontSize: "20px" }}
                  type="circle"
                  width={130}
                  status="default"
                  percent={percentComplete}
                  strokeWidth={3}
                  theme={{
                    default: {
                      symbol: `${percentComplete}/100`,
                      trailcolor: "lightblue",
                      color: "#008ecc",
                    },
                  }}
                />
              </Col> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TeamCard;
