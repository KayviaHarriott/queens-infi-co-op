import { Button } from "@mui/material";

interface OutlineButtonProps {
  label: string;
  action: () => void;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  label,
  action,
}) => {
  return (
    <Button
      sx={{
        border: "1px solid #484848",
        textTransform: "none",
        color: "#484848",
        borderRadius: "50px",
      }}
      onClick={action}
    >
      {label}
    </Button>
  );
};
