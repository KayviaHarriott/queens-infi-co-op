const isPositionLegal = (row: number, col: number, queenPositions: [number, number][]) => {
    for (const [qRow, qCol] of queenPositions) {
      if (
        qRow === row || // Same row
        qCol === col || // Same column
        Math.abs(qRow - row) === Math.abs(qCol - col) // Same diagonal
      ) {
        return false;
      }
    }
    return true;
  };
  