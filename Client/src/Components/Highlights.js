import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import realTime from "../Landing Page Assets/real-time.png";
import userFriendly from "../Landing Page Assets/user-friendly.png";
import multipleModels from "../Landing Page Assets/multiple-models.png";

const Highlights = React.forwardRef((props, ref) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBox = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const boxStyle = {
    padding: 2,
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: "#301536",
    transition: "transform 0.3s ease, height 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div ref={ref} style={{ height: "100vh", paddingTop: "80px" }}>
      <h2 style={{ textAlign: "center" }}>Features and Highlights</h2>
      <Container style={{ paddingTop: "70px" }}>
        <Row>
          <Col>
            <Box
              sx={{
                ...boxStyle,
                height: expandedIndex === 1 ? "250px" : "150px",
              }}
              onClick={() => toggleBox(1)}
            >
              <Box component="img" src={realTime} sx={{ height: "50px" }} />
              <Typography variant="body2" style={{ color: "#ffe6e6", paddingTop: "20px" }}>
                Instant Birth Prediction
              </Typography>
              {expandedIndex === 1 && (
                <Typography
                  variant="body2"
                  style={{ color: "#ffe6e6", paddingTop: "20px", textAlign: "center" }}
                >
                  Provides quick and accurate predictions based on the input data, enabling users
                  to gain immediate insights without delays.
                </Typography>
              )}
            </Box>
          </Col>
          <Col>
            <Box
              sx={{
                ...boxStyle,
                height: expandedIndex === 2 ? "250px" : "150px",
              }}
              onClick={() => toggleBox(2)}
            >
              <Box component="img" src={userFriendly} sx={{ height: "50px" }} />
              <Typography variant="body2" style={{ color: "#ffe6e6", paddingTop: "20px" }}>
                User-Friendly Interface
              </Typography>
              {expandedIndex === 2 && (
                <Typography
                  variant="body2"
                  style={{ color: "#ffe6e6", paddingTop: "20px", textAlign: "center" }}
                >
                  Features an intuitive and accessible design that simplifies interaction,
                  ensuring a seamless experience for users of all technical backgrounds.
                </Typography>
              )}
            </Box>
          </Col>
          <Col>
            <Box
              sx={{
                ...boxStyle,
                height: expandedIndex === 3 ? "250px" : "150px",
              }}
              onClick={() => toggleBox(3)}
            >
              <Box component="img" src={multipleModels} sx={{ height: "50px" }} />
              <Typography variant="body2" style={{ color: "#ffe6e6", paddingTop: "20px" }}>
                Multiple Machine Learning Models
              </Typography>
              {expandedIndex === 3 && (
                <Typography
                  variant="body2"
                  style={{ color: "#ffe6e6", paddingTop: "20px", textAlign: "center" }}
                >
                  Leverages a variety of ML models to offer flexible and robust predictions,
                  allowing comparisons and improved accuracy by selecting the best-performing
                  model.
                </Typography>
              )}
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Highlights;
