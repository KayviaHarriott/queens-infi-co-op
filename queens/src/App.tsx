import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button } from "@mui/material";
import { CustomAccordion } from "./components/CustomAccordion";
import { CustomToggleButton } from "./components/CustomToggleButtons";
import DynamicGrid from "./components/DynamicGrid";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{}}>
        <Header/>
        <div>
          <div className="bg-[#F2F0EB] min-h-screen flex justify-center items-start py-[24px]">
            <div className="w-full max-w-[400px] flex flex-col gap-4">
              {/* <div className="w-[100%] pb-[16px]"><CustomToggleButton/></div> */}
              <div className="bg-[white] rounded-md p-[24px]">
                <div className="w-full">
                  <Box className="pb-[12px]">
                    <DynamicGrid gridSize= {4}/>
                  </Box>
                  <div className="flex flex-col gap-3">
                    <CustomAccordion
                      content={[
                        { summary: "How to play", details: "One details" },
                      ]}
                    />
                    <CustomAccordion
                      content={[
                        { summary: "Examples", details: "Two details" },
                      ]}
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
              <div className="bg-[white] rounded-md p-[24px]">
                <p>About the Developers</p>
                <div className="flex gap-2">
                  <p>Icon</p>
                  <div>
                    <p>Kayvia Harriott</p>
                    <p>Description</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p>Icon</p>
                  <div>
                    <p>Michael Webb</p>
                    <p>Description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
