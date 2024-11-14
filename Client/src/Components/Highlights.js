import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import realTime from "../Landing Page Assets/real-time.png";
import userFriendly from "../Landing Page Assets/user-friendly.png";
import multipleModels from "../Landing Page Assets/multiple-models.png";

const Highlights = React.forwardRef((props, ref) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Define boxStyle with Flexbox for centering content
  const boxStyle = {
    padding: 2,
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: "#301536",
    transition: "transform 0.3s ease",
    display: "flex", // Enable Flexbox
    flexDirection: "column", // Stack the content vertically (image on top, text below)
    alignItems: "center", // Center align horizontally
    justifyContent: "center", // Center align vertically
    height: "150px", // Set a fixed height for the box
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
                transform: hoverIndex === 1 ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoverIndex(1)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Box component="img" src={realTime} sx={{ height: "50px" }} />
              <Typography variant="body2" style={{ color: "#ffe6e6", paddingTop:"20px" }}>
                Instant Birth Prediction
              </Typography>
            </Box>
          </Col>
          <Col>
            <Box
              sx={{
                ...boxStyle,
                transform: hoverIndex === 2 ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Box component="img" src={userFriendly} sx={{ height: "50px" }} />
              <Typography variant="body2" style={{ color: "#ffe6e6", paddingTop:"20px" }}>
                User-Friendly Interface
              </Typography>
            </Box>
          </Col>
          <Col>
            <Box
              sx={{
                ...boxStyle,
                transform: hoverIndex === 3 ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoverIndex(3)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Box component="img" src={multipleModels} sx={{ height: "50px" }} />
              <Typography variant="body2" style={{ color: "#ffe6e6", paddingTop:"20px" }}>
                Multiple Machine Learning Models
              </Typography>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Highlights;
