import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { QueenIcon } from "./icons/queen_icon";
import { CrossIcon } from "./icons/cross_icon";
import CrossIcon_SVG from "../components/icons/cross_icon.svg"
import QueenIcon_SVG from "../components/icons/queen_icon.svg"
const DynamicGrid = () => {
  return (
    <div>
      
       {[<img src={QueenIcon_SVG} alt="Cross Icon" />, <img src={CrossIcon_SVG} alt="Cross Icon" />].map((item, index) => (
        <Box
        key={index}
        sx={{
          border: "1px solid black",
          width: "50px",
          height: "50px", // Ensures box has a fixed size
          padding: "8px",
          display: "flex", // Enables flexbox
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
        }}
      >
        {item}
      </Box>
      ))}
    </div>
  );
};

export default DynamicGrid;
