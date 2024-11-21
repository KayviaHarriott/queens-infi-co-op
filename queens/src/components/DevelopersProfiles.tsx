import { Box } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

export const DevelopersProfiles = () => {
  return (
    <div>
      <div className="flex justify-between pb-2">
        <p className="font-bold pb-2 text-[#0D5BBA]">About the Developers</p>
        <HelpIcon />
      </div>
      <div className="flex flex-col gap-2">
        {[
          {
            label: "Kayvia Harriott",
            description:
              "Lorem ipsum dolor sit amet, at adipiscing elit. Nulla non viverra velit.",
            picture: <WomanIcon />,
            color: "#E5F1FF",
          },
          {
            label: "Michael Webb",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non viverra velit.",
            picture: <ManIcon />,
            color: "#E5FFED",
          },
        ].map((developer, index) => (
          <Box key={index}></Box>
        ))}
      </div>
    </div>
  );
};
