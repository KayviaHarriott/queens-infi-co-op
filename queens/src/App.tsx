import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button } from "@mui/material";
import { CustomAccordion } from "./components/CustomAccordion";
import { CustomToggleButton } from "./components/CustomToggleButtons";
import DynamicGrid from "./components/DynamicGrid";
import { Header } from "./components/Header";
import { DevelopersProfiles } from "./components/DevelopersProfiles";
import { HowToPlayText } from "./components/HowToPlayText";
import { Examples } from "./components/Examples";
import gameData from "./assets/sample_games.json";

function App() {
  const [count, setCount] = useState(0);
  const loadGame = (gameId: number) => {
    const selectedGame = gameData.games.find((game) => game.id === gameId);
    return selectedGame || null; // Return the selected game or null if not found
  };

  // Example usage: Load the game with ID 1
  function getRandomInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Example Usage
  const randomNumber = getRandomInRange(1, 10);

  // const currentGame = loadGame(getRandomInRange(1, 3));
  const currentGame = loadGame(2);

  return (
    <>
      <Box sx={{}}>
        <Header />
        <div>
          <div className="bg-[#F2F0EB] min-h-screen flex justify-center items-start py-[24px]">
            <div className="w-full max-w-[400px] flex flex-col gap-4">
              {/* <div className="w-[100%] pb-[16px]"><CustomToggleButton/></div> */}
              <div className="bg-[white] rounded-md p-[24px]">
                <div className="w-full">
                  <Box className="pb-[12px]">
                    {currentGame && (
                      <DynamicGrid gridSize={currentGame.grid_size} layout={currentGame.layout}/>
                    )}
                  </Box>
                  <div className="flex flex-col gap-3">
                    <CustomAccordion
                      content={[
                        {
                          summary: "How to play",
                          details: <HowToPlayText />,
                        },
                      ]}
                    />
                    <CustomAccordion
                      content={[{ summary: "Examples", details: <Examples /> }]}
                    />
                  </div>
                  <div className="pt-[24px]">
                    <Button
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#181819",
                        color: "white",
                        borderRadius: "50px",
                        width: "100%",
                      }}
                    >
                      see results
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-[white] rounded-md px-[16px] py-[16px]">
                <DevelopersProfiles />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
