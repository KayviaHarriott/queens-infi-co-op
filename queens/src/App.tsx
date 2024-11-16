import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button } from "@mui/material";
import { CustomAccordion } from "./components/CustomAccordion";
import HelpIcon from "@mui/icons-material/Help";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CustomToggleButton } from "./components/CustomToggleButtons";
import DynamicGrid from "./components/DynamicGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Queens</p>
        </Box>
        <Box className="flex justify-between px-[24px]">
          <Box className="w-1/3">
            <p>LinkedIn Game</p>
          </Box>
          <Box className="w-1/3 flex justify-center">
            <div className="flex">
              <AccessTimeIcon /> <p>Timer</p>
            </div>
          </Box>
          <Box className="flex w-1/3 justify-end">
            {[
              { label: "Clear", action: "" },
              { label: "Hint", action: "" },
            ].map((items, index) => (
              <Button
                sx={{
                  border: "1px solid #484848",
                  textTransform: "none",
                  color: "#484848",
                  borderRadius: "50px",
                }}
              >
                {items.label}
              </Button>
            ))}
            <p>
              <HelpIcon />
            </p>
            <p>Settings</p>
          </Box>
        </Box>
        <div>
          <div className="bg-[#F2F0EB] min-h-screen flex justify-center items-start py-[24px]">
            <div className="w-full max-w-[400px]">
              {/* <div className="w-[100%] pb-[16px]"><CustomToggleButton/></div> */}
              <div className="bg-[white] rounded-md p-[24px] ">
                <div className="w-full">
                  <Box className="pb-[12px]">
                    <DynamicGrid/>
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
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
