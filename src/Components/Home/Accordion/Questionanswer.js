import { Container } from "@mui/material";
import React from "react";
import "./Accordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questionanswer = () => {
  return (
    <div className="accrodionSection">
      <h2 className="offerHeading">
        QUSTION AND <span className="offerHighlight">ANSWER</span>
      </h2>
      <h4 className="offerSubTitle">Most Common And Important Answer</h4>
      <Container sx={{ display: "flex", gap: "25px" }}>
        <div className="accordionImage">
          <img
            src="https://validthemes.online/themeforest/dostart/assets/img/about/1.jpg"
            alt=""
            srcset=""
            className=""
          />
        </div>
        <div className="accordionPart">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ff5a6e" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                <span className="accordionNumber">1</span> Do I need a business
                plan?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordionDetailes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing .
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Suspendisse malesuada lacus ex, sit amet
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ff5a6e" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h4>
                <span className="accordionNumber">2</span> How long should a
                business plan be?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordionDetailes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ff5a6e" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h4>
                <span className="accordionNumber">3</span> What goes into a
                business plan?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordionDetailes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ff5a6e" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h4>
                <span className="accordionNumber">4</span> Do I need a business
                plan?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordionDetailes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Questionanswer;
