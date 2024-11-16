import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CustomAccordionProps {
  content: { summary: string; details: string | React.ReactNode }[];
}

export const CustomAccordion: React.FC<CustomAccordionProps> = ({
  content,
}) => {
  return (
    <div>
      {content.map((item, index) => (
        <Accordion
          key={index}
          sx={{ boxShadow: "none", outline: '1px solid #E4E5E6'}}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>{item.summary}</AccordionSummary>
          <AccordionDetails>{item.details}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
