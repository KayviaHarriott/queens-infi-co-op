import React, { useState } from 'react';
import { Button } from '@mui/material';

const DynamicGrid = () => {
  const [gridSize, setGridSize] = useState(4); // Default 4x4 grid
  const [clickedCells, setClickedCells] = useState(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState(null);

  // Function to change grid size
  const changeGridSize = (size) => {
    setGridSize(size);
    setClickedCells(new Set()); // Reset clicked cells
  };

  // Function to handle mouse down (start selecting cells)
  const handleMouseDown = (index) => {
    setIsDragging(true);
    setStartCell(index); // Store the starting cell
    handleCellClick(index); // Immediately select the clicked cell
  };

  // Function to handle mouse move (during the drag)
  const handleMouseMove = (index) => {
    if (!isDragging || startCell === null) return;

    // Get all the selected cells during the drag
    const selectedCells = getSelectedCells(startCell, index);

    setClickedCells((prev) => {
      const newSet = new Set(prev);
      selectedCells.forEach((i) => newSet.add(i));
      return newSet;
    });
  };

  // Function to handle mouse up (end the drag)
  const handleMouseUp = () => {
    setIsDragging(false);
    setStartCell(null); // Reset the start cell after drag
  };

  // Function to handle individual cell click (for selecting or deselecting)
  const handleCellClick = (index) => {
    setClickedCells((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // If clicked again, unselect it
      } else {
        newSet.add(index); // Otherwise, select it
      }
      return newSet;
    });
  };

  // Helper function to get the selected cells during drag (considering grid layout)
  const getSelectedCells = (start, end) => {
    const selectedCells = [];
    const rows = Math.floor(start / gridSize);
    const cols = start % gridSize;
    const endRows = Math.floor(end / gridSize);
    const endCols = end % gridSize;

    // Determine range of cells to select, considering the start and end positions
    const rowDirection = rows < endRows ? 1 : -1;
    const colDirection = cols < endCols ? 1 : -1;

    let row = rows;
    let col = cols;

    while ((rowDirection === 1 && row <= endRows) || (rowDirection === -1 && row >= endRows)) {
      while ((colDirection === 1 && col <= endCols) || (colDirection === -1 && col >= endCols)) {
        selectedCells.push(row * gridSize + col);
        col += colDirection;
      }
      row += rowDirection;
      col = cols; // Reset column for next row
    }

    return selectedCells;
  };

  // Render the grid cells
  const renderGrid = () => {
    const totalCells = gridSize * gridSize;
    const rows = [];

    for (let i = 0; i < totalCells; i++) {
      rows.push(
        <div
          key={i}
          onMouseDown={() => handleMouseDown(i)} // Start selecting on mouse down
          onMouseEnter={() => handleMouseMove(i)} // Select cells on mouse move
          onMouseUp={handleMouseUp} // End selection on mouse up
          className={`border p-4 flex justify-center items-center cursor-pointer transition-colors duration-300 
                      ${clickedCells.has(i) ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          {i + 1}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="space-x-4">
        <Button variant="contained" color="primary" onClick={() => changeGridSize(4)}>4x4</Button>
        <Button variant="contained" color="primary" onClick={() => changeGridSize(6)}>6x6</Button>
        <Button variant="contained" color="primary" onClick={() => changeGridSize(12)}>12x12</Button>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {renderGrid()}
      </div>
    </div>
  );
};

export default DynamicGrid;
