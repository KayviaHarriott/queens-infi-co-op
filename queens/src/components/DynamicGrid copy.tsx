import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CrossIcon_SVG from "../components/icons/cross_icon.svg";
import QueenIcon_SVG from "../components/icons/queen_icon.svg";

const DynamicGrid = () => {
  const states = ["none", "cross", "queen"];
  const [box, setBox] = useState(states[0]);

  const toggleBoxState = () => {
    setBox((prev) => states[(states.indexOf(prev) + 1) % states.length]);
  };

  return (
    <div>
      <Box
        onClick={toggleBoxState}
        sx={{
          border: "1px solid black",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {box === "none" && <p></p>}
        {box === "cross" && <img src={CrossIcon_SVG} alt={"Cross"} />}
        {box === "queen" && <img src={QueenIcon_SVG} alt={"Queen"} />}
      </Box>
    </div>
  );
};

export default DynamicGrid;
