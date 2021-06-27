import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./SettingsSideMenu.css";

const SettingsSideMenu = ({ header, items, itemSelected, setItemSelected }) => {
  return (
    <Card
      style={{
        backgroundColor: "inherit",
        borderWidth: "2px",
        borderColor: "#1e2329",
        color: "lightgrey",
      }}
    >
      {header && (
        <Card.Header style={{ color: "#8b9499", fontWeight: "bold" }}>
          {header}
        </Card.Header>
      )}
      <ListGroup>
        {items &&
          items.map((item, index) => {
            return (
              <ListGroup.Item
                id={itemSelected === index ? "list-item-selected" : "list-item"}
                onClick={() => setItemSelected(index)}
              >
                {item}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
};

export default SettingsSideMenu;
