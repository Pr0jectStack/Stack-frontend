import React, { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import developers from "./team-collab.jpg";
import "./Developers.css";
const Developers = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Row>
        <Col lg="8" md="12">

          <Carousel>
            {/* <Carousel.Item> */}
              <img
                className="d-block mx-auto"
                src={developers}
                alt="First slide"
                style={{
                  height: "auto",
                  maxWidth: "90vw",
                  borderRadius: "20px",
                }}
              />
              
            {/* </Carousel.Item> */}
          </Carousel>
        </Col>
        <Col md="12" lg="3" className="quote-body" style={{borderRadius:"20px"}} >
        <section class="blockquote-section">
                <blockquote class="classy-bq" >
                    <p>
                        Akshay Gupta and Ritvij Srivastava, both are pre-final year students in Bachelor's of Technology in Manipal University Jaipur.
                    </p>
                </blockquote>
        </section>
        <br></br>
        </Col>
      </Row>
    </div>
  );
};

export default Developers;