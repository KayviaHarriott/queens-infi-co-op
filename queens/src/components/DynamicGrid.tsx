import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import CrossIcon_SVG from "../components/icons/cross_icon.svg";
import QueenIcon_SVG from "../components/icons/queen_icon.svg";

interface DynamicGrid{
  gridSize: number;
}
export const DynamicGrid: React.FC<DynamicGrid> = ({gridSize}) => {
  const states = ["none", "cross", "queen"];
  
  // State to manage the size of the grid and box states for all grid items
  // const [gridSize, setGridSize] = useState(4); // default grid size 4x4
  const [boxStates, setBoxStates] = useState(Array(gridSize * gridSize).fill("none"));

  // Function to handle the change in grid size
  // To change
  const handleGridSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = Number(event.target.value);
    // setGridSize(size);
    setBoxStates(Array(size * size).fill("none"));
  };

  // Function to toggle box state
  const toggleBoxState = (index: number) => {
    setBoxStates((prevStates) => {
      const newStates = [...prevStates];
      const currentState = newStates[index];
      newStates[index] = states[(states.indexOf(currentState) + 1) % states.length];
      return newStates;
    });
  };

  // Create the grid dynamically
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        const index = i * gridSize + j;
        row.push(
          <Box
            key={index}
            onClick={() => toggleBoxState(index)}
            sx={{
              border: "1px solid black",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {boxStates[index] === "none" && <p></p>}
            {boxStates[index] === "cross" && <img src={CrossIcon_SVG} alt={"Cross"} />}
            {boxStates[index] === "queen" && <img src={QueenIcon_SVG} alt={"Queen"} />}
          </Box>
        );
      }
      grid.push(
        <div key={i} style={{ display: "flex" }}>
          {row}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="flex justify-center items-center">
      <div >{renderGrid()}</div>
    </div>
  );
};

export default DynamicGrid;
