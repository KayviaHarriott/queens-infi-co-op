import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import CrossIcon_SVG from "../components/icons/cross_icon.svg";
import QueenIcon_SVG from "../components/icons/queen_icon.svg";

interface DynamicGrid {
  gridSize: number;
  layout: string[]; //to change
}
export const DynamicGrid: React.FC<DynamicGrid> = ({ gridSize, layout }) => {
  const states = ["none", "cross", "queen"];

  const [boxStates, setBoxStates] = useState(
    Array(gridSize * gridSize).fill("none")
  );
  const [cellColors, setCellColors] = useState<string[]>(
    Array(gridSize * gridSize).fill("none")
  );

  const colorMapping = {
    "1": "#96BEFF",
    "2": "#BBA3E2",
    "3": "#DFA0BF",
    "4": "#62EFEA",
    "5": "#DFDFDF",
    "6": "#E6F388",
    "7": "#FF7B60",
    "8": "#FFC992",
    "9": "#B9B29E",
    "10": "#B3DFA0",
  };

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
      newStates[index] =
        states[(states.indexOf(currentState) + 1) % states.length];
      return newStates;
    });
  };

  useEffect(() => {
    const newColors: string[] = [];

    layout.forEach((row) => {
      row.split(" ").forEach((cell) => {
        const cellNumber = cell.replace(/\D/g, ""); // Extract the number from the layout string (ignores non-numeric parts)
        const color = colorMapping[cellNumber] || "none"; // Get the color based on the number
        newColors.push(color); // Push the corresponding color
      });
    });

    setCellColors(newColors); // Set the cell colors
  }, [layout]);

  // Create the grid dynamically
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        const index = i * gridSize + j;
        console.log(cellColors[index]);
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
              backgroundColor: cellColors[index],
            }}
          >
            <Box /*change color of this box */></Box>

            {boxStates[index] === "none" && <p></p>}
            {boxStates[index] === "cross" && (
              <img src={CrossIcon_SVG} alt={"Cross"} />
            )}
            {boxStates[index] === "queen" && (
              <img src={QueenIcon_SVG} alt={"Queen"} />
            )}
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
      <Box sx={{border: "5px solid black", borderRadius: "5px"}}><div>{renderGrid()}</div></Box>
    </div>
  );
};

export default DynamicGrid;
