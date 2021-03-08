import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const CardItems = ({
  demo = false,
  type,
  title,
  subtitle,
  description,
  teamLeader,
  members,
}) => {
  return (
    <div>
      {demo ? (
        <Card
          style={{
            width: "90%",
            height: "280px",
            marginBottom: "5%",
            backgroundColor: "inherit",
            borderWidth: "3px",
            borderColor: "#222128",
            borderStyle: "dashed",
            borderRadius:"15px"
          }}
        >
          <Card.Body>
           
            <Card.Subtitle className="mb-2 text-muted">{}</Card.Subtitle>
            <Card.Text style={{ color: "grey" }} className="text-center mt-4">
              {
                <i
                  style={{ fontSize: "130px" }}
                  class="fa fa-plus-circle"
                  aria-hidden="true"
                ></i>
              }
            </Card.Text>
            <Card.Title style={{ color: "#008ecc" }} className="text-center">
              Create a new {type}
            </Card.Title>
            <Card.Link href="#">{}</Card.Link>
            <Card.Link href="#">{}</Card.Link>
          </Card.Body>
        </Card>
      ) : (
        <Card
          style={{
            width: "90% ",
            height: "280px",
            marginBottom: "5%",
            backgroundColor: "inherit",
            borderWidth: "2px",
            borderColor: "#222128",
            borderRadius:"15px"
          }}
        >
          <Card.Body>
            <Card.Title style={{ color: "#008ecc" }}>{title}</Card.Title>
            <Card.Subtitle className="mb-3" style={{ color: "grey" }}>
              {subtitle}
            </Card.Subtitle>
            <Card.Text className="mb-5 text-white">{description}</Card.Text>
            <Progress
              className="mx-center shadow"
              style={{ fontSize: "10px" }}
              type="bar"
              width={100}
              status="default"
              percent={80}
              strokeWidth={3}
              theme={{
                default: {
                  symbol: `${80}/100`,
                  trailcolor: "lightblue",
                  color: "#008ecc",
                },
              }}
            />
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CardItems;
